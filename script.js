// ===== STABLE BASE SCRIPT =====

// Verified Demons
let demons = [
  { rank: 1, name: "Thinking Space II", difficulty: "Extreme Demon", creator: "CarioX", verifier: "Zoink" },
  { rank: 2, name: "Flamewall", difficulty: "Extreme Demon", creator: "Unarwall", verifier: "Cuatrocientos" },
  { rank: 3, name: "Boobawamba", difficulty: "Extreme Demon", creator: "Akunakunn", verifier: "EastShark" },
  { rank: 4, name: "Amethyst", difficulty: "Extreme Demon", creator: "iMist", verifier: "wPopoff" },
  { rank: 5, name: "Nullscapes", difficulty: "Extreme Demon", creator: "ItzKiba", verifier: "Zoink" },
  { rank: 6, name: "Tidal Wave", difficulty: "Extreme Demon", creator: "OnilinkGD", verifier: "Zoink" },
  { rank: 7, name: "Every End", difficulty: "Extreme Demon", creator: "MindCap", verifier: "Hamilton" },
  { rank: 8, name: "Acheron", difficulty: "Extreme Demon", creator: "Ryamu", verifier: "Zoink" },
  { rank: 9, name: "Avernus", difficulty: "Extreme Demon", creator: "Pockewindfish", verifier: "Zoink" },
  { rank: 10, name: "SlaughterHouse", difficulty: "Extreme Demon", creator: "IcedCave", verifier: "CheaterUk" }
];

// Unverified Demons
let unverifiedDemons = [
  { rank: 1, name: "Grief", difficulty: "Extreme Demon", creator: "IcedCave" },
  { rank: 2, name: "Tsunami", difficulty: "Extreme Demon", creator: "OniLink" },
  { rank: 3, name: "Orbit", difficulty: "Extreme Demon", creator: "Mindcap" }
];

// Unrated Demons
let unratedDemons = [
  { rank: 1, name: "Ton 618", difficulty: "Extreme Demon", creator: "Pooooooooooooch" },
  { rank: 2, name: "Element 111 Rg", difficulty: "Extreme Demon", creator: "Compendium" }
];

const demonList = document.getElementById("demon-list");
const helpLink = document.getElementById("help-link");

const verifiedTab = document.getElementById("verified-tab");
const unverifiedTab = document.getElementById("unverified-tab");
const unratedTab = document.getElementById("unrated-tab");
const playersTab = document.getElementById("players-tab");

// Default: show verified demons
renderList(demons);
helpLink.style.display = "none";

// Tab switching
verifiedTab.addEventListener("click", () => {
  renderList(demons);
  helpLink.style.display = "none";
});

unverifiedTab.addEventListener("click", () => {
  renderList(unverifiedDemons);
  helpLink.style.display = "none";
});

unratedTab.addEventListener("click", () => {
  renderList(unratedDemons);
  helpLink.style.display = "none";
});

playersTab.addEventListener("click", () => {
  demonList.innerHTML = ""; // clear demon list
  helpLink.style.display = "block"; // show the Google Form link
});

// Render function for demons
function renderList(list) {
  demonList.innerHTML = ""; // clear existing content

  list.forEach(demon => {
    const div = document.createElement("div");
    div.className = "demon";

    div.innerHTML = `
      <div class="demon-content">
        <div class="demon-text">
          ${demon.rank ? `<div class="rank">#${demon.rank}</div>` : ""}
          <div class="name">${demon.name}</div>
          <div class="info">
            ${demon.difficulty}<br>
            Creator: ${demon.creator}<br>
            ${
              demon.verifier
                ? `Verified by: ${demon.verifier}`
                : list === unverifiedDemons
                  ? "Unverified"
                  : "Unrated"
            }
          </div>
        </div>
      </div>
    `;

    demonList.appendChild(div);
  });
}
