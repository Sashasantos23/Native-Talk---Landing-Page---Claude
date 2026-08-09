import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ElementType } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  as?: ElementType;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition" | "ref">;

/**
 * Scroll-reveal primitive. Honors prefers-reduced-motion (fades only, no travel).
 * Replaces the dozen ad-hoc framer-motion blocks scattered across the old sections.
 */
export function Reveal({
  as = "div",
  delay = 0,
  y = 22,
  duration = 0.7,
  className,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion(as as ElementType) as ElementType;

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
