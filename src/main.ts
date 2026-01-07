import { quotes } from './quotes';

function renderWelcome(): void {
  const js_container = document.getElementById('js-container');
  if (!js_container) return;
  js_container.innerHTML = `
    <p class="mt-2 text-sm text-gray-600">
      ${quotes[Math.floor(Math.random() * quotes.length)]}
    </p>
  `;
}

renderWelcome();
