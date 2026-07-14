document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter-button');
  const papers = document.querySelectorAll('.paper-card');
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      filters.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const filter = button.dataset.filter;
      papers.forEach((paper) => {
        paper.classList.toggle('is-hidden', filter !== 'all' && paper.dataset.category !== filter);
      });
    });
  });

  document.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', async () => {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = '已复制 ✓';
      } catch {
        button.textContent = '请手动复制';
      }
      window.setTimeout(() => { button.textContent = original; }, 1800);
    });
  });

  const checks = document.querySelectorAll('.checklist input');
  checks.forEach((input, index) => {
    const key = `research-starter-check-${index}`;
    input.checked = window.localStorage.getItem(key) === 'true';
    input.addEventListener('change', () => window.localStorage.setItem(key, String(input.checked)));
  });
});
