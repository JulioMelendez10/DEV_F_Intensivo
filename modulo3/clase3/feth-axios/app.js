const API_URL = "https://swapi.py4e.com/api/people/";

const fetchBtn = document.getElementById("fetchBtn");
const axiosBtn = document.getElementById("axiosBtn");

fetchBtn.addEventListener("click", getWithFetch);
axiosBtn.addEventListener("click", getWithAxios);

// ================= FETCH =================
async function getWithFetch() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error("Error con fetch:", error);
    }
}

// ================= AXIOS =================
async function getWithAxios() {
    try {
        const response = await axios.get(API_URL);
        displayCharacters(response.data.results);
    } catch (error) {
        console.error("Error con axios:", error);
    }
}

// ================= UI =================
function displayCharacters(characters) {
    const container = document.getElementById("data-container");
    container.innerHTML = "";

    characters.forEach((char, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;

        card.innerHTML = `
            <img src="${img}" width="100%">
            <h3>${char.name}</h3>
            <p>Altura: ${char.height}</p>
            <p>Peso: ${char.mass}</p>
        `;

        container.appendChild(card);
    });
}