const apiURL = "https://rickandmortyapi.com/api/character";

function Card(character){
    const cardsContainer = document.querySelector('.cards-container');
    const {name, status, image } = character;
    
    const title = document.createElement("h4");
    title.textContent = name;

    const characterStatus = document.createElement('p');
    characterStatus.textContent = status;
    if(status == "Alive"){
        
        characterStatus.style.color('Green');

    }else{
        characterStatus.style.color('Red');
    }

    const imageCharacter = document.createElement('igm');
    imageCharacter.src = image;
    imageCharacter.width = 300;

    const Card = document.createElement('div');
    Card.appendChild(title);
    Card.appendChild(imageCharacter);
    Card.appendChild(characterStatus);
    Card.style.backgroundColor = 'Grey';


    cardsContainer.appendChild(Card);
}


async function getCaracters(){
    try{
        const response = await fetch(apiURL);
        const {results} = await response.json();
        console.log(results);
    
    }catch(error){

        console.error(error);

    }
    

}


getCaracters();