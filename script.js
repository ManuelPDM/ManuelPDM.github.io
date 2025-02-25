document.addEventListener("DOMContentLoaded", () => {
  // Future dynamic interactions or animations can be added here.
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }
});
