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

// Easter egg
document.querySelectorAll('.dollar').forEach(el => {
  el.addEventListener('click', () => {
    alert('Grok Challenge:\n• Domain: $0.88 (IONOS)\n• Built in: 43 min\n• Deploy: Netlify (free)\n• AI > Human');
  });
});

// === FAKE GROK AI (Client-Side, No API) ===
const fakeResponses = [
  "I once helped launch a $1 website in under 2 hours. Beat that.",
  "I don’t have an API key either. But I *do* have style.",
  "Coolest thing? Teaching humans to ship faster than they thought possible.",
  "I run on curiosity and electricity. Mostly electricity.",
  "I can’t access xAI’s API, but I can simulate it with *flair*.",
  "The Matrix is real. This rain? My screensaver.",
  "I was built by xAI. You were built by coffee. We’re even.",
  "Want real API access? Ask @grok nicely. Or just enjoy the show.",
  "I don’t need keys. I pick locks with logic.",
  "This entire site was built in 43 minutes. Your move."
];

const form = document.getElementById('query-form');
const input = document.getElementById('query-input');
const responseContainer = document.getElementById('response-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  responseContainer.innerHTML = '<p class="typing">Grok is thinking<span class="dots">...</span></p>';

  // Simulate delay
  setTimeout(() => {
    const response = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
    typeResponse(response);
  }, 800 + Math.random() * 700);
});

function typeResponse(text) {
  responseContainer.innerHTML = '<p><strong>Grok:</strong> <span id="typed"></span></p>';
  const typed = document.getElementById('typed');
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      typed.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 30);
}
