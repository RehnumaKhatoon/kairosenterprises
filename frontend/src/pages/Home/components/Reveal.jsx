import { motion, useReducedMotion } from "motion/react";

const Reveal = ({ children, className = "", delay = 0, direction = "up", as = "div" }) => {
  const reduceMotion = useReducedMotion();
  const offsets = { up: [0, 28], left: [-28, 0], right: [28, 0] };
  const [x, y] = offsets[direction] || offsets.up;
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
