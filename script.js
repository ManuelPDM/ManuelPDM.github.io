document.addEventListener("DOMContentLoaded", () => {
  // Check localStorage for dark mode preference
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Only add toggle functionality if the toggle button exists
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      // Toggle dark mode on the body
      document.body.classList.toggle('dark-mode');

      // Save the updated preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
      } else {
        localStorage.setItem('dark-mode', 'false');
      }
    });
  }
});
