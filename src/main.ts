function renderWelcome(): void {
  const app = document.getElementById('app');
  if (!app) return;
  const now = new Date();
  app.innerHTML = `
    <strong>js is alive.</strong>
    <div style="margin-top: .5rem; font-size: 0.9rem; color: #555;">
      time: ${now.toLocaleString()}<br/>
      mode: esm bundle via esbuild
    </div>
  `;
}

renderWelcome();

