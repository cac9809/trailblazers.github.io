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

function loadCsvIntoTable(csvPath, tableId) {
  fetch(csvPath)
     .then(response => {
      if (!response.ok) {
        throw new Error("Error loading csv file");
      }
      return response.text();
    })
    .then(text => {
      const table = document.getElementById(tableId);
      if (!table) return;

      const rows = text
        .trim()
        .split("\n")
        .map(row => row.split(","));

      table.innerHTML = "";

      const headerRow = document.createElement("tr");
      rows[0].forEach(cell => {
        const th = document.createElement("th");
        th.textContent = cell;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      rows.slice(1).forEach(row => {
          const tr = document.createElement("tr");
          row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
          });
          table.appendChild(tr);
        });
      })
    .catch(error => {
      console.error("Error loading data:", error);
    });

  }

  loadCsvIntoTable("data/time-tracking1.csv", "time-table-spring");
  loadCsvIntoTable("data/time-tracking2.csv", "time-table-summer");
});

