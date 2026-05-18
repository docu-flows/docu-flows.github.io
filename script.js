// =====================================================
// DocuFlow — UI interactions
// =====================================================

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll with sticky-nav offset
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = document.querySelector('.nav').offsetHeight - 4;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Reveal-on-scroll
const revealTargets = document.querySelectorAll(
  '.section-head, .solution, .product, .industry, .value, .contact-card, .contact-item, .hero-content, .hero-visual'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// Contact form (front-end demo — wire to your backend / email service)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();

  if (!name || !email) {
    status.style.color = '#dc2626';
    status.textContent = 'Please enter your name and email.';
    return;
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    status.style.color = '#dc2626';
    status.textContent = 'That email address looks invalid.';
    return;
  }

  status.style.color = '';
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = `Thanks ${name.split(' ')[0]}! Our team will contact you within 48 hours.`;
    form.reset();
  }, 700);
});

// Subtle parallax on hero cards
const cards = document.querySelectorAll('.float-card');
const hero = document.querySelector('.hero');
hero?.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  cards.forEach((c, i) => {
    const depth = (i + 1) * 6;
    c.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});
hero?.addEventListener('mouseleave', () => {
  cards.forEach((c) => (c.style.transform = ''));
});
