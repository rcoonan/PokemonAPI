
let idNumber = 1

const baseURL = `https://pokeapi.co/api/v2/pokemon/`;

const list = document.querySelectorAll(".list-group")
const pokemonName = document.querySelector(".pokemonName");
const pokemonID = document.querySelector(".pokemonID");
const pokemonCharacteristicsHeight = document.querySelector(".pokemonCharacteristicsHeight");
const pokemonCharacteristicsWeight = document.querySelector(".pokemonCharacteristicsWeight")
const pokemonAbility = document.querySelector(".pokemonAbility");
const pokemonType = document.querySelector(".pokemonType");
const pokemonStats = document.querySelector(".pokemonStats");
const pokemonPic = document.querySelector(".pokemonPic");

/*
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
.then(response => response.json())
.then(list =>{
  console.log(list);
})

let nextButton = document.querySelector(".next")
let previousButton = document.querySelector(".previous")


nextButton.addEventListener("click", ()=>{
    idNumber++
    fetchResults()
    console.log(idNumber)
  })

  if(previousButton){
  previousButton.addEventListener("click", ()=>{
    idNumber--
    fetchResults()
  })
  }
*/
function fetchResults(){
fetch(`${baseURL}${idNumber}`) 
.then(response => response.json())  
.then(pokemonInfo => {

console.log(pokemonInfo);

console.log(pokemonInfo["name"])

pokemonName.textContent = pokemonInfo["name"];
pokemonCharacteristicsHeight.textContent = pokemonInfo["height"];
pokemonCharacteristicsWeight.textContent = pokemonInfo["weight"];
pokemonAbility.textContent = pokemonInfo["abilities"][0]["ability"]["name"];
pokemonType.textContent = pokemonInfo['types'][0]["type"]["name"];
pokemonStats.textContent = pokemonInfo["stats"][0]["base_stat"];
pokemonPic.src = pokemonInfo['sprites']['front_default']
})}

fetchResults()





