// Shared scroll-reveal used across ~15 section files. Was previously a
// hand-typed { initial, whileInView, viewport, transition } block repeated
// at each callsite with slightly different, arbitrary values (duration
// 0.4-0.7, y offset 16-30) — noise, not intentional variation. One
// exponential ease-out timing here means a future timing change is a
// one-line edit instead of a repo-wide hunt.
//
// Usage: <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
// `custom` is optional — omit it for a single element with no stagger.
export const EASE_OUT = [0.16, 1, 0.3, 1]

export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, delay: index * 0.08 },
  }),
}
