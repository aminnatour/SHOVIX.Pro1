// إضاءة تتبع الماوس على كل كرت
    const cards = document.querySelectorAll('.link-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });

    // توست عند الضغط
    const toast = document.getElementById('toast');
    let toastTimer;
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    }
    cards.forEach(card => {
        card.addEventListener('click', () => {
            showToast('جاري فتح ' + card.getAttribute('data-name') + '...');
        });
    });