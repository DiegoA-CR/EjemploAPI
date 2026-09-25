//ejemplo API_Rest
const apiURL = "https://rickandmortyapi.com/api/character"; // llamada a la API
const segundaApiURL = "https://rickandmortyapi.com/api/character/?page=2"; // llamada a la segunda pagina de personajes

function creaCard(character) {
  const cardsContainer = document.querySelector("#container");
  const { name, status, image, species, gender, origin } = character;

  //titulo
  //Nombre
  const nombre = document.createElement("h2");
  nombre.textContent = name;
  nombre.className = "nombre-personaje";
  nombre.style.color = "#000";

  //Especie
  const especie = document.createElement("h3");
  especie.textContent = species;

  if (species != "Human") {
    especie.className = "otra-especie";
    especie.style.color = "red";
  } else {
    especie.style.color = "#654";
  }

  //Genero
  const genero = document.createElement("h4");
  genero.textContent = gender;
  genero.className = "genero-personaje";

  // caracteristicas
  const characterStatus = document.createElement("p");
  characterStatus.textContent = status;

  if (status == "Alive") {
    characterStatus.className = "personaje-vivo";
  } else {
    characterStatus.className = "personaje-muerto";
  }

  //Origen
  const origen = document.createElement("h5");
  origen.textContent = origin.name;
  origen.className = "origen-Personaje";

  //imagenes

  const imageCharacter = document.createElement("img");
  imageCharacter.src = image;
  imageCharacter.width = 250;
  imageCharacter.className = "image-character";

  const Card = document.createElement("div"); // creamos el contenedor
  Card.appendChild(nombre); // Le agrgamos el titulo
  Card.appendChild(imageCharacter); // la imagen
  Card.appendChild(especie); //indexamos la especie
  Card.appendChild(genero); //el genero del personaje
  Card.appendChild(origen); // agegamos el origen del personaje
  Card.appendChild(characterStatus); // y el estado
  Card.className = "card-style";
  Card.id = "card-IDstyle";

  //unimos todo
  cardsContainer.appendChild(Card);

  //console.log(cardsContainer);
}

function creaSecondCard(SecPagCharacter) {
  const SegCardsContainer = document.querySelector("#container-two");
  const { name, status, image, species, gender, origin } = SecPagCharacter;

  //Nombre
  const nombre = document.createElement("h2");
  nombre.textContent = name;
  nombre.className = "nombre-personaje";
  nombre.style.color = "#000";
  //Imagen
  const imagenAPI = document.createElement("img");
  imagenAPI.src = image;
  imagenAPI.width = 250;
  imagenAPI.className = "imagen-personajes";
  //Especie
  const especie = document.createElement("h3");
  especie.textContent = species;
  if (species != "Human") {
    especie.className = "otra-especie";
    especie.style.color = "#f00";
  } else {
    especie.style.color = "#654";
  }
  //Genero
  const genero = document.createElement("h4");
  genero.textContent = gender;
  if (gender != "Male") {
    genero.style.color = "#f2b";
    genero.className = "genero-personaje";
  } else {
    genero.style.color = "#049";
    genero.className = "genero-personaje";
  }
  //Origen
  const origenPersonaje = document.createElement("h5");
  origenPersonaje.textContent = origin.name;
  origenPersonaje.className = "origen-personaje";
  //Status Personaje

  const statusPersonaje = document.createElement("p");
  statusPersonaje.textContent = status;
  if (status == "Alive") {
    statusPersonaje.className = "personaje-vivo";
  } else {
    statusPersonaje.className = "personaje-muerto";
  }

  const Card = document.createElement("div");
  Card.appendChild(nombre);
  Card.appendChild(imagenAPI);
  Card.appendChild(especie);
  Card.appendChild(genero);
  Card.appendChild(origenPersonaje);
  Card.className = "card-style";
  Card.id = "card-IDstyle";

  //anexamos todo
  SegCardsContainer.appendChild(Card);
}

// funciones asincronas

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
async function getCaractersPagDos() {
  try {
    const response = await fetch(segundaApiURL);
    //espera json
    const { results } = await response.json();
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      creaSecondCard(results[i]);
    }
  } catch (error) {
    console.error(error);
  }
}

getCaracters();
getCaractersPagDos();
