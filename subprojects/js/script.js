const btns  = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(card => {
            card.dataset.hidden = (f !== 'all' && !card.dataset.tags.includes(f));
        });
    });
});
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});
document.getElementById('total-count').textContent = cards.length;
document.getElementById('done-count').textContent  = [...cards].filter(c => c.querySelector('.status-done')).length;
document.getElementById('wip-count').textContent   = [...cards].filter(c => c.querySelector('.status-wip')).length;


