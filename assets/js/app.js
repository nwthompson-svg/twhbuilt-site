/* ═══════════════════════════════════════════════════════
   TWH Built — App Script
   Minimal. Scroll animations only.
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Scroll-triggered fade-in ──────────────────────
    const targets = document.querySelectorAll(
        '.section__heading, .section__intro, .card, .process-step, .contact-lines'
    );

    targets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
});
