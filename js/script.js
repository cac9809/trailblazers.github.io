document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const tabs = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;

      tabs.forEach(tab => tab.classList.remove("active"));
      buttons.forEach(btn => btn.classList.remove("active"));

      document.getElementById(tabId).classList.add("active");
      button.classList.add("active");
      
    });
  });
});