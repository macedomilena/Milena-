document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// EFEITO DE SCROLL NA NAVBAR
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


// ANIMAÇÃO AO APARECER NA TELA
const elements = document.querySelectorAll(
  '.section-title, .sobre-text, .paixao-card, .comp-card, .recurso-card, .exp-card'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});


// CONTADOR ANIMADO (EXPERIÊNCIA)
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
  const updateCount = () => {
    const target = parseInt(counter.innerText);
    if (isNaN(target)) return;

    let count = 0;
    const speed = 50;

    const increment = target / speed;

    const interval = setInterval(() => {
      count += increment;

      if (count >= target) {
        counter.innerText = target + '+';
        clearInterval(interval);
      } else {
        counter.innerText = Math.ceil(count);
      }
    }, 30);
  };

  const observerCounter = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observerCounter.disconnect();
    }
  });

  observerCounter.observe(counter);
});


// BOTÃO "VOLTAR AO TOPO"
const btnTop = document.createElement('button');
btnTop.innerText = '↑';
btnTop.style.position = 'fixed';
btnTop.style.bottom = '20px';
btnTop.style.right = '20px';
btnTop.style.padding = '10px 15px';
btnTop.style.borderRadius = '50%';
btnTop.style.border = 'none';
btnTop.style.background = '#c9684a';
btnTop.style.color = '#fff';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
btnTop.style.zIndex = '999';

document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
