document.addEventListener("DOMContentLoaded", () => {
  // Check localStorage for dark mode preference
  const darkModeEnabled = localStorage.getItem("dark-mode") === "true";
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    const toggle = document.getElementById("dark-toggle");
    if (toggle) toggle.checked = true;
  }

  const darkToggle = document.getElementById("dark-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("change", function() {
      if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");
      }
    });
  }
});
