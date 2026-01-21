/* ===========================
   PARALLAX + REVEAL
=========================== */
function handleScrollEffects() {
  // Parallax
  document.querySelectorAll('.parallax').forEach(section => {
    section.style.backgroundPositionY = -(window.scrollY * 0.4) + 'px';
  });

  // Reveal sections
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });

  // Reveal project cards
  document.querySelectorAll('.project-card').forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScrollEffects);
window.addEventListener('load', handleScrollEffects);



/* ===========================
   SCROLL SPY MODERNO
=========================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header nav a');

const spyObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(
          `.header nav a[href="#${id}"]`
        );

        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach(section => spyObserver.observe(section));



/* ===========================
   SCROLL SUAVE COM OFFSET
=========================== */
document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header').offsetHeight;

    const position =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });
});



/* ===========================
   LAZY LOADING + SKELETON
=========================== */
document.querySelectorAll('.lazy-img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    img.parentElement.classList.add('loaded');
  });
});



/* ===========================
   DARK / LIGHT MODE
=========================== */
const toggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light');

  const isLight = body.classList.contains('light');
  toggle.textContent = isLight ? '☀️' : '🌙';

  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
