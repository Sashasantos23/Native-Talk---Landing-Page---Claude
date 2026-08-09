import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_PROMPT_LENGTH = 2000;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authenticate the request
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { prompt } = await req.json();

    // Validate prompt input
    if (prompt && (typeof prompt !== "string" || prompt.length > MAX_PROMPT_LENGTH)) {
      return new Response(
        JSON.stringify({ error: "Invalid prompt. Must be a string under 2000 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const defaultPrompt =
      "A polished, modern AI-generated caricature illustration of a professional English teacher for a personal website hero section. Confident female English teacher with shoulder-length wavy deep marsala/red hair, warm smile (friendly but professional), light natural makeup, soft confident eye expression, approachable but authoritative posture. Wearing a white button-up blouse (clean, structured, elegant), black tailored pants (professional fit), black heels, minimal jewelry (small gold earrings, subtle necklace). Holding a closed or slightly open notebook or tablet (modern teaching vibe). Standing upright with confident posture, one hand relaxed by her side, one hand gesturing naturally (welcoming gesture), body slightly angled (dynamic, not stiff). Background: navy blue gradient background (professional tone), soft warm lighting, subtle blurred bookshelf behind her (minimal, not detailed), very subtle floating academic icons (speech bubble, book outline, laptop icon), soft gold accent lines or shapes integrated subtly. Clean and minimal — no clutter, no American flag, no chalkboard. Semi-realistic modern caricature style, refined lines (not cartoonish), balanced proportions (not exaggerated), smooth digital illustration style, slight depth and shadow for premium feel. Website-hero quality resolution, clean edges suitable for light and dark backgrounds. The image should communicate confidence, warmth, intelligence, approachability, trustworthiness, modern online educator. Vertical hero layout composition, high resolution, optimized for website display, clean transparent or softly blended background, balanced contrast for navy/white website theme.";

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image",
          messages: [
            {
              role: "user",
              content: prompt || defaultPrompt,
            },
          ],
          modalities: ["image", "text"],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Image generation failed. Please try again later." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error("No image in AI response");
      return new Response(
        JSON.stringify({ error: "Image generation failed. Please try again later." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ imageUrl }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("generate-caricature error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});