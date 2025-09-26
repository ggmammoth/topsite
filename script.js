// Примерни данни за сървърите
const servers = {
  tomorrow: [
    { name: "AvroraMU", version: "S6 Ep20", votes: 1200 },
    { name: "TitanMU", version: "S4 Ep6", votes: 800 }
  ],
  next7: [
    { name: "InfinityMU", version: "S3 Ep1", votes: 950 },
    { name: "DarkMU", version: "S8 Ep3", votes: 700 }
  ],
  afterWeek: [
    { name: "LegendsMU", version: "S12 Ep1", votes: 500 },
    { name: "EliteMUdada", version: "S9 Ep2", votes: 300 }
  ],
  opened: [
    { name: "GlobalMU", version: "S13 Ep1", votes: 2500 },
    { name: "ClassicMU", version: "S2 Ep1", votes: 1800 }
  ],
  likes: [
    { name: "PopularMU", version: "S6 Ep20", votes: 5000 },
    { name: "VotersMU", version: "S4 Ep2", votes: 4200 }
  ]
};

// Зарежда таблицата с данни
function loadTable(category) {
  const tbody = document.getElementById("serversBody");
  tbody.innerHTML = ""; // Изчистваме старите редове

  servers[category].forEach((server, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${server.name}</td>
      <td>${server.version}</td>
      <td>${server.votes}</td>
    `;
    tbody.appendChild(row);
  });
}

// Функция за избор на филтър
function filterServers(category) {
  loadTable(category);
}

// Зареждаме "Tomorrow" по подразбиране
document.addEventListener("DOMContentLoaded", () => {
  filterServers("tomorrow");
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  if (track) {
    const items = track.innerHTML;
    // Дублираме съдържанието за безкраен ефект
    track.innerHTML += items;
  }
});

// Toggle burger menu
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}
