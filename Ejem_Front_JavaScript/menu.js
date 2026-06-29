//ejemplo API_Rest
const apiURL = "https://rickandmortyapi.com/api/character"; // llamada a la API

function creaCard(character){
    const cardsContainer = document.querySelector('#cards-container');
    const {name, status, image } = character;
    //titulo

    const title = document.createElement("h4");
    title.textContent = name;

    // caracteristicas

    const characterStatus = document.createElement('p');
    characterStatus.textContent = status;

    if(status == "Alive"){
        
        characterStatus.style.color = "Green";

    }else{
        characterStatus.style.color = "Red";
    }
    
    //imagenes

    const imageCharacter = document.createElement('img');
    imageCharacter.src = image;
    imageCharacter.width = 300;

    const Card = document.createElement('div');// creamos el contenedor
    Card.appendChild(title);// Le agrgamos el titulo
    Card.appendChild(imageCharacter); // la imagen
    Card.appendChild(characterStatus);// y el estado
    Card.style.backgroundColor = "Grey";

    //unimos todo
    cardsContainer.appendChild(Card);

    console.log(cardsContainer);
}

// funcion asincrona 

async function getCaracters(){
    
    //intenta
    try{
        //consume api
        const response = await fetch(apiURL);
        //espera json
        const {results} = await response.json();
        
        console.log(results);

        for(let i=0; i<results.length;i++){
            creaCard(results[i]);
        }

    }catch(error){

        console.error(error);

    }
}


getCaracters();