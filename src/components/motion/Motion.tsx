"use client";

import { motion, type Variants } from "framer-motion";
import { type ComponentProps } from "react";

// Animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Default transition
const defaultTransition = {
  duration: 0.3,
  ease: "easeOut" as const,
};

// Motion wrapper components
interface MotionDivProps extends ComponentProps<typeof motion.div> {
  children?: React.ReactNode;
}

export function MotionDiv({
  children,
  variants = fadeInUp,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, margin: "-50px" },
  transition = defaultTransition,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionSectionProps extends ComponentProps<typeof motion.section> {
  children?: React.ReactNode;
}

export function MotionSection({
  children,
  variants = fadeIn,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, margin: "-100px" },
  transition = defaultTransition,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface MotionArticleProps extends ComponentProps<typeof motion.article> {
  children?: React.ReactNode;
}

export function MotionArticle({
  children,
  variants = fadeInUp,
  ...props
}: MotionArticleProps) {
  return (
    <motion.article variants={variants} {...props}>
      {children}
    </motion.article>
  );
}

// List container for staggered children
interface MotionListProps extends ComponentProps<typeof motion.div> {
  children?: React.ReactNode;
}

export function MotionList({ children, className, ...props }: MotionListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
