// Parallax + scroll reveal + active menu
window.addEventListener('scroll', () => {

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

  // Active menu link
  document.querySelectorAll('section').forEach(sec => {
    const scrollY = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      document
        .querySelectorAll('.header nav a')
        .forEach(a => a.classList.remove('active'));

      const activeLink = document.querySelector(
        '.header nav a[href="#' + id + '"]'
      );

      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Lazy loading + skeleton
document.querySelectorAll('.lazy-img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    img.parentElement.classList.add('loaded');
  });
});

// Dark / Light toggle
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

// 🔥 SCROLL SUAVE + FORÇA ATIVAÇÃO DAS ANIMAÇÕES
document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header').offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // 🔥 força disparo do reveal após o scroll
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 300);
  });
});

// 🔥 Garante animações ao carregar a página
window.dispatchEvent(new Event('scroll'));
