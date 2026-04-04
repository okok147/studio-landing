(function () {
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const yearFooter = document.getElementById("year-footer");
  const y = String(new Date().getFullYear());

  if (yearEl) yearEl.textContent = y;
  if (yearFooter) yearFooter.textContent = y;

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const reveals = document.querySelectorAll("[data-reveal]");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );

  reveals.forEach((el) => io.observe(el));
})();
