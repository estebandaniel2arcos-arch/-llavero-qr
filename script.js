const openBtn = document.getElementById('openBtn');
const musicBtn = document.getElementById('musicBtn');
const messageCard = document.getElementById('messageCard');
const effects = document.getElementById('effects');
const songUrl = 'https://www.youtube.com/watch?v=mivSRv18QaY&list=RDmivSRv18QaY&start_radio=1';

function celebration(amount = 34) {
  const icons = ['⚽', '💙', '💛', '🏆'];
  for (let i = 0; i < amount; i++) {
    const span = document.createElement('span');
    span.className = 'floating';
    span.textContent = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.fontSize = (18 + Math.random() * 28) + 'px';
    span.style.animationDuration = (3 + Math.random() * 3) + 's';
    span.style.animationDelay = (Math.random() * 0.8) + 's';
    effects.appendChild(span);
    setTimeout(() => span.remove(), 6500);
  }
}

openBtn.addEventListener('click', () => {
  messageCard.classList.remove('hidden');
  messageCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  celebration(45);
});

musicBtn.addEventListener('click', () => {
  celebration(35);
  window.open(songUrl, '_blank');
});
