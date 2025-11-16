const START_TIME = new Date('2025-11-15T18:47:00-07:00').getTime();

function updateTimer() {
  const diff = Date.now() - START_TIME;
  const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  document.getElementById('timer').textContent = `${h}:${m}:${s}`;
}
setInterval(updateTimer, 1000);
updateTimer();

document.querySelectorAll('.dollar').forEach(el => {
  el.addEventListener('click', () => {
    alert('Grok Challenge:\n• Domain: $0.88 (IONOS)\n• Built in: 43 min\n• Deploy: Netlify (free)\n• AI > Human');
  });
});
