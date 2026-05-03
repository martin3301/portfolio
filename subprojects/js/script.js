const btns  = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
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
document.getElementById('total-count').textContent = cards.length;
document.getElementById('done-count').textContent  = [...cards].filter(c => c.querySelector('.status-done')).length;
document.getElementById('wip-count').textContent   = [...cards].filter(c => c.querySelector('.status-wip')).length;