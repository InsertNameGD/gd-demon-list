// ===== DEMON DATA WITH IMAGES, LINKS, AND STATS =====
let demons = [
  { rank: 1, name: "Thinking Space II", difficulty: "Extreme Demon", creator: "CarioX", verifier: "Zoink", image: "images/thinking-space-ii.webp", stats: { stars: 10, length: "Extra Long", downloads: "2.6m" , record: "3:45" }, link: "https://www.youtube.com/watch?v=F05aMR0F6YM" },
  { rank: 2, name: "Flamewall", difficulty: "Extreme Demon", creator: "Unarwall", verifier: "Cuatrocientos", image: "images/flamewall.webp", stats: { stars: 10, length: "Extra Long", downloads: "2.9m", record: "4:10" }, link: "https://www.youtube.com/watch?v=eeTlZnCGP_k" },
  { rank: 3, name: "Boobawamba", difficulty: "Extreme Demon", creator: "Akunakunn", verifier: "EastShark", image: "images/boobawamba.webp", stats: { stars: 10, length: "Extra Long", downloads: "834k", record: "4:05" }, link: "https://www.youtube.com/watch?v=i0ZZW5TujvE" },
  { rank: 4, name: "Amethyst", difficulty: "Extreme Demon", creator: "iMist", verifier: "wPopoff", image: "images/amethyst.webp", stats: { stars: 10, length: "Long", downloads: "3.5m", record: "3:55" }, link: "https://www.youtube.com/watch?v=OqGuNBi3_SU" },
  { rank: 5, name: "Nullscapes", difficulty: "Extreme Demon", creator: "ItzKiba", verifier: "Zoink", image: "images/nullscapes.webp", stats: { stars: 10, length: "Long", downloads: "1.9m", record: "4:20" }, link: "https://www.youtube.com/watch?v=C-KDhWkXlvI" },
  { rank: 6, name: "Tidal Wave", difficulty: "Extreme Demon", creator: "OnilinkGD", verifier: "Zoink", image: "images/tidal-wave.webp", stats: { stars: 10, length: "Extra Long", downloads: "16.2m", record: "4:00" }, link: "https://www.youtube.com/watch?v=9fsZ014qB3s" },
  { rank: 7, name: "Every End", difficulty: "Extreme Demon", creator: "MindCap", verifier: "Hamilton", image: "images/every-end.webp", stats: { stars: 10, length: "Extra Long", downloads: "4.1m", record: "4:15" }, link: "https://www.youtube.com/watch?v=f-O_TnxIZBA" },
  { rank: 8, name: "Silent Clubstep", difficulty: "Extreme Demon", creator: "TheRealSailent", verifier: "zoe", image: "images/silent-clubstep.webp", stats: { stars: 10, length: "Long", downloads: "6.3m", record: "3:50" }, link: "https://www.youtube.com/watch?v=GR4OMkS3SN8" },
  { rank: 9, name: "andromeda", difficulty: "Extreme Demon", creator: "Insxne97", verifier: "Taiago", image: "images/andromeda.webp", stats: { stars: 10, length: "Long", downloads: "568k", record: "4:05" }, link: "https://www.youtube.com/watch?v=mmBwB_34eoI&list=RDmmBwB_34eoI&start_radio=1" },
  { rank: 10, name: "Subsuming Vortex", difficulty: "Extreme Demon", creator: "SeptaGon7", verifier: "Cursed", image: "images/subsuming-vortex.webp", stats: { stars: 10, length: "Long", downloads: "296k", record: "4:30" }, link: "https://www.youtube.com/watch?v=0eYG1ogJpIQ" },
  { rank: 11, name: "Aquamarine", difficulty: "Extreme Demon", creator: "sincos", verifier: "seels", image: "images/aquamarine.webp", stats: { stars: 10, length: "Long", downloads: "296k", record: "4:30" }, link: "https://www.youtube.com/watch?v=Wo5wcsw5jcE" },
  { rank: 12, name: "Anathema", difficulty: "Extreme Demon", creator: "nikroplays", verifier: "Whizkid05", image: "images/anathema.jpg", stats: { stars: 10, length: "Long", downloads: "296k", record: "4:30" }, link: "https://www.youtube.com/watch?v=Wo5wcsw5jcE" },
];


let unverifiedDemons = [
  { rank: 1, name: "Grief", difficulty: "Extreme Demon", creator: "IcedCave", image: "images/grief.webp" },
  { rank: 2, name: "Tsunami", difficulty: "Extreme Demon", creator: "OniLink", image: "images/tsunami.jpg" },
  { rank: 3, name: "Orbit", difficulty: "Extreme Demon", creator: "Mindcap", image: "images/orbit.jpg" }
];

let unratedDemons = [
  { rank: 1, name: "Ton 618", difficulty: "Extreme Demon", creator: "Pooooooooooooch", image: "images/ton-618.webp" },
  { rank: 2, name: "Element 111 Rg", difficulty: "Extreme Demon", creator: "Compendium", image: "images/element-111-rg.webp" }
];

// ===== DOM ELEMENTS =====
const demonList = document.getElementById("demon-list");
const helpLink = document.getElementById("help-link");

const verifiedTab = document.getElementById("verified-tab");
const unverifiedTab = document.getElementById("unverified-tab");
const unratedTab = document.getElementById("unrated-tab");
const playersTab = document.getElementById("players-tab");

// ===== MODAL ELEMENTS =====
const modal = document.getElementById("stats-modal");
const modalName = document.getElementById("modal-name");
const modalImage = document.getElementById("modal-image");
const modalInfo = document.getElementById("modal-info");
const modalLink = document.getElementById("modal-link");
const closeModal = document.getElementById("close-modal");

// ===== DEFAULT VIEW =====
renderList(demons);
helpLink.style.display = "none";

// ===== TAB SWITCHING =====
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
  demonList.innerHTML = "";
  helpLink.style.display = "block";
});

// ===== RENDER FUNCTION =====
function renderList(list) {
  demonList.innerHTML = "";

  list.forEach(demon => {
    const div = document.createElement("div");
    div.className = "demon-content";

    div.innerHTML = `
      <img class="demon-image" src="${demon.image ? demon.image : 'images/placeholder.webp'}" alt="${demon.name}">
      <div class="demon-text">
        ${demon.rank ? `<div class="rank">#${demon.rank}</div>` : ""}
        <div class="name">${demon.name}</div>
        <div class="info">
          ${demon.difficulty}<br>
          Creator: ${demon.creator}<br>
          ${demon.verifier ? `Verified by: ${demon.verifier}` : list === unverifiedDemons ? "Unverified" : "Unrated"}
        </div>
      </div>
    `;

    // Open stats modal on click
    div.addEventListener("click", () => {
      showStatsModal(demon);
    });

    demonList.appendChild(div);
  });
}

// ===== SHOW MODAL =====
function showStatsModal(demon) {
  modalName.textContent = `#${demon.rank || "-"} - ${demon.name}`;
  modalImage.src = demon.image || 'images/placeholder.webp';
  modalInfo.innerHTML = `
    Difficulty: ${demon.difficulty}<br>
    Creator: ${demon.creator}<br>
    Verifier: ${demon.verifier || "N/A"}<br>
    ${demon.stats ? `Stars: ${demon.stats.stars}<br>Length: ${demon.stats.length}<br>Downloads: ${demon.stats.downloads}<br>Record: ${demon.stats.record}` : ""}
  `;
  modalLink.href = demon.link || "#";
  modal.style.display = "flex";
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});
