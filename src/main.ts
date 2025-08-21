import { quotes } from './quotes';

function renderWelcome(): void {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    <strong>js is alive.</strong>
    <div style="margin-top: .5rem; font-size: 0.9rem; color: #555;">
      <p>
        ${quotes[Math.floor(Math.random() * quotes.length)]}
      </p>
    </div>
  `;
}

renderWelcome();
