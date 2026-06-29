const openBtn = document.getElementById('openSurprise');
const songBtn = document.getElementById('playSong');
const messageCard = document.getElementById('messageCard');
const layer = document.getElementById('effectsLayer');
const songUrl = 'https://www.youtube.com/watch?v=mivSRv18QaY&list=RDmivSRv18QaY&start_radio=1';

function launchEffects(amount = 38) {
  const symbols = ['⚽', '💙', '💛', '✨'];
  for (let i = 0; i < amount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (2.6 + Math.random() * 2.8) + 's';
    particle.style.fontSize = (20 + Math.random() * 24) + 'px';
    particle.style.opacity = 0.75 + Math.random() * 0.25;
    layer.appendChild(particle);
    setTimeout(() => particle.remove(), 5600);
  }
}

openBtn.addEventListener('click', () => {
  messageCard.classList.remove('hidden');
  launchEffects(50);
  messageCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

songBtn.addEventListener('click', () => {
  launchEffects(45);
  window.open(songUrl, '_blank', 'noopener,noreferrer');
});
