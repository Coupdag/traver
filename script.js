document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('.player');
  let playerX = window.innerWidth / 2 - 25;
  player.style.left = `${playerX}px`;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && playerX > 0) {
      playerX -= 20;
      player.style.left = `${playerX}px`;
    } else if (e.key === 'ArrowRight' && playerX < window.innerWidth - 50) {
      playerX += 20;
      player.style.left = `${playerX}px`;
    }
  });
});

