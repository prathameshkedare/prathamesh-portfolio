/* =========================================================
   PRATHAMESH KEDARE — PORTFOLIO SCRIPTS
   ========================================================= */

// Scroll Reveal — fade/slide elements into view as user scrolls
const revealEls = document.querySelectorAll('.sr-hidden');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.remove('sr-hidden');
        entry.target.classList.add('sr-visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el) => revealObserver.observe(el));

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.padding = '0.6rem 6%';
  } else {
    nav.style.padding = '1rem 6%';
  }
});
