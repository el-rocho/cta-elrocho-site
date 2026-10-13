(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('cta-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  root.dataset.theme = stored || (prefersDark ? 'dark' : 'light');

  const updateLabel = () => {
    const isDark = root.dataset.theme === 'dark';
    button?.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
    button?.setAttribute('title', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
  };

  updateLabel();

  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cta-theme', root.dataset.theme);
    updateLabel();
  });
})();
