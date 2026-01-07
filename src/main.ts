import { quotes } from './quotes';

function renderWelcome(): void {
  const js_container = document.getElementById('js-container');
  if (!js_container) {
    console.log('no js-container element found');
    return;
  }

  js_container.innerHTML = `
    <p class="text-sm text-gray-600">
      ${quotes[Math.floor(Math.random() * quotes.length)]}
    </p>
  `;
}

renderWelcome();
