document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("dark-toggle");

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    if (darkToggle) darkToggle.checked = true;
  }

  if (darkToggle) {
    darkToggle.addEventListener("change", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "true" : "false");
    });
  }
});
