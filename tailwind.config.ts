import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Hanken Grotesk"', "sans-serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        /* Brand aliases */
        ink: {
          DEFAULT: "oklch(var(--ink) / <alpha-value>)",
          soft: "oklch(var(--ink-soft) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "oklch(var(--paper) / <alpha-value>)",
          2: "oklch(var(--paper-2) / <alpha-value>)",
        },
        flame: {
          DEFAULT: "oklch(var(--flame) / <alpha-value>)",
          deep: "oklch(var(--flame-deep) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "oklch(var(--gold) / <alpha-value>)",
          deep: "oklch(var(--gold-deep) / <alpha-value>)",
        },
        whatsapp: "oklch(var(--whatsapp) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-strong": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.24s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
