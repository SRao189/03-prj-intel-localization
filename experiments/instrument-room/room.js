// Experiment scroll logic. Markup has no style attributes; values are applied with CSSOM setProperty, which
// style-src self allows. Those writes do appear as style attributes in the live DOM (the same as the approved Intel code).
// Every position, width, and height comes from a sourced value stored in data-to; years are labels, never positions.
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const targets = document.querySelectorAll("[data-prop][data-to]");
const scenes = document.querySelectorAll(".scene");

function apply(el) {
  el.style.setProperty(el.dataset.prop, el.dataset.to);
}

// Start every measured element at zero so it can travel to its value.
targets.forEach((el) => el.style.setProperty(el.dataset.prop, "0%"));

function reveal(scene) {
  scene.classList.add("is-in");
  scene.querySelectorAll("[data-prop][data-to]").forEach(apply);
}

// Reveal is idempotent, so one observer serves both modes. Under reduced motion the CSS transitions
// are not defined, so the same reveal lands at its final value without any movement.
if (reduce.matches) {
  scenes.forEach((s) => s.classList.add("is-in"));
  targets.forEach(apply);
}
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      reveal(e.target);
      io.unobserve(e.target);
    }
  },
  { threshold: 0.25 },
);
scenes.forEach((s) => io.observe(s));

// The room's light follows the scene: warm for the threshold and the readings, cool for the two limits.
const lightIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) document.body.dataset.light = e.target.dataset.light;
    }
  },
  { threshold: 0.55 },
);
scenes.forEach((s) => lightIO.observe(s));

// Switching reduced motion on mid-visit shows the complete state at once. Switching it off leaves the
// already-shown content in place: nothing animates back, which is the intended behaviour.
reduce.addEventListener("change", () => {
  if (reduce.matches) {
    scenes.forEach((s) => s.classList.add("is-in"));
    targets.forEach(apply);
  }
});
