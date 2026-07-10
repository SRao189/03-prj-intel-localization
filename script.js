const timelineCards = document.querySelectorAll(".timeline-card");

function setHintState(card) {
  const hint = card.querySelector(".card-hint");
  if (!hint) return;
  hint.textContent = card.open ? "Tap or press Enter to collapse" : "Hover or tap for more";
}

timelineCards.forEach((card) => {
  setHintState(card);

  card.addEventListener("toggle", () => {
    setHintState(card);
  });

  const summary = card.querySelector("summary");
  if (!summary) return;

  summary.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      card.open = !card.open;
    }
  });
});

/* ============================================================
   LevelUp 1: auto-detect language change and apply RTL.
   Google Translate adds "translated-rtl" / "translated-ltr" to <html>
   and swaps the lang attribute. We watch both, flip the page direction,
   and swap Bootstrap to its RTL build.
   ============================================================ */
const RTL_LANGS = new Set(["ar", "he", "fa", "ur", "ps", "sd", "ug", "yi"]);
const LTR_CSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
const RTL_CSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";

// Pure decision function (unit-checkable via ?selftest).
function shouldUseRtl(htmlEl) {
  if (htmlEl.classList.contains("translated-rtl")) return true;
  if (htmlEl.classList.contains("translated-ltr")) return false;
  const lang = (htmlEl.getAttribute("lang") || "en").slice(0, 2).toLowerCase();
  return RTL_LANGS.has(lang);
}

function applyDirection() {
  const html = document.documentElement;
  const rtl = shouldUseRtl(html);
  html.setAttribute("dir", rtl ? "rtl" : "ltr");
  const css = document.getElementById("bootstrap-css");
  const wanted = rtl ? RTL_CSS : LTR_CSS;
  if (css && css.getAttribute("href") !== wanted) css.setAttribute("href", wanted);
}

new MutationObserver(applyDirection).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class", "lang", "dir"],
});
applyDirection();

/* ============================================================
   Subscription form: Bootstrap-style validation + success message.
   ============================================================ */
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.getElementById("form-status");
    if (!newsletterForm.checkValidity()) {
      newsletterForm.classList.add("was-validated");
      status.textContent = "";
      return;
    }
    newsletterForm.classList.remove("was-validated");
    newsletterForm.reset();
    status.textContent = "Thanks for subscribing! Check your inbox to confirm.";
  });
}

/* ponytail: one runnable self-check for the RTL branch. Runs only with
   ?selftest in the URL so the production console stays clean. */
if (location.search.includes("selftest")) {
  const fake = (cls, lang) => {
    const el = document.createElement("html");
    if (cls) el.className = cls;
    if (lang) el.setAttribute("lang", lang);
    return el;
  };
  console.assert(shouldUseRtl(fake("translated-rtl")) === true, "rtl class => rtl");
  console.assert(shouldUseRtl(fake("translated-ltr", "ar")) === false, "ltr class wins over lang");
  console.assert(shouldUseRtl(fake("", "ar")) === true, "arabic lang => rtl");
  console.assert(shouldUseRtl(fake("", "en")) === false, "english lang => ltr");
  console.log("selftest: RTL detection OK");
}
