const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    document.querySelectorAll('.work-item').forEach(item => {
      item.style.display = filter === 'all' || item.dataset.category === filter ? '' : 'none';
    });
  });
});

// Pequeño efecto de entrada para los elementos de proyecto.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project-card, .work-item, .showcase-block').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const day = String(now.getDate()).padStart(2, '0');

    const months = [
        'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
        'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
    ];

    const month = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('datetime').textContent =
        `${time} // ${day} ${month} ${year}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
window.addEventListener('scroll', () => {
    const topbar = document.querySelector('.topbar');

    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const topbar = document.querySelector('.topbar');

    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
        document.body.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
        document.body.classList.remove('scrolled');
    }
});