const toggleBtn = document.getElementById('toggle-theme');

  // Load saved theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = "☀️ Mode";
  } else {
    if (toggleBtn) toggleBtn.textContent = "🌸 Mode";
  }

  // Toggle and save theme preference
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark ? "☀️ Mode" : "🌸 Mode";
    });
  }
