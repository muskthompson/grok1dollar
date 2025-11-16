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

// New: Real-time xAI Query Form Handler
const form = document.getElementById('query-form');
const responseContainer = document.getElementById('response-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('query-input').value;
  responseContainer.innerHTML = '<p>Querying xAI API...</p>';

  // Placeholder for xAI API call - Replace with your API key and endpoint
  // For details on xAI API, visit https://x.ai/api
  const apiKey = 'YOUR_XAI_API_KEY_HERE'; // Insert your key here
  const endpoint = 'https://api.x.ai/v1/chat/completions'; // Example endpoint - check docs

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'grok-1', // Or appropriate model
        messages: [{ role: 'user', content: query }]
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    responseContainer.innerHTML = `<p><strong>Grok Response:</strong> ${data.choices[0].message.content}</p>`;
  } catch (error) {
    responseContainer.innerHTML = '<p>Error querying xAI API. Check your API key and visit https://x.ai/api for details.</p>';
  }
});
