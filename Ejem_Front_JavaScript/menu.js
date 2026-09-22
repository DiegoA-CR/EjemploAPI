//ejemplo API_Rest
const apiURL = "https://rickandmortyapi.com/api/character"; // llamada a la API

function creaCard(character) {
  const cardsContainer = document.querySelector("#container");
  const { name, status, image, species, gender } = character;

  //titulo

  const nombre = document.createElement("h2");
  nombre.textContent = name;
  nombre.className = "nombre-personaje";
  nombre.style.color = "#000";

  const especie = document.createElement("h4");
  especie.textContent = species;

  if (species != "Human") {
    especie.className = "otra-especie";
    especie.style.color = "red";
  } else {
    especie.style.color = "#654";
  }

  const genero = document.createElement("h5");
  genero.textContent = gender;
  genero.className = "genero-personaje";
  // caracteristicas

  const characterStatus = document.createElement("p");
  characterStatus.textContent = status;

  if (status == "Alive") {
    characterStatus.className = "vivo";
  } else {
    characterStatus.className = "muerto";
  }

  //imagenes

  const imageCharacter = document.createElement("img");
  imageCharacter.src = image;
  imageCharacter.width = 250;
  imageCharacter.className = "image-character";

  const Card = document.createElement("div"); // creamos el contenedor
  Card.appendChild(nombre); // Le agrgamos el titulo
  Card.appendChild(imageCharacter); // la imagen
  Card.appendChild(especie);
  Card.appendChild(genero);
  Card.appendChild(characterStatus); // y el estado
  Card.className = "card-style";
  Card.id = "card-IDstyle";

  //unimos todo
  cardsContainer.appendChild(Card);

  //console.log(cardsContainer);
}

// funcion asincrona

async function getCaracters() {
  //intenta
  try {
    //consume api
    const response = await fetch(apiURL);
    //espera json
    const { results } = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      creaCard(results[i]);
    }
  } catch (error) {
    console.error(error);
  }
}

getCaracters();
