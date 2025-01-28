let Name = document.getElementById('name');
let PokemonCry = document.getElementById('pokemonCry');
let Type = document.getElementById('type')
let Type2 = document.getElementById('type2')
let PokemonImg = document.getElementById('pokemonImg')
let ShinyBtn = document.getElementById('shiny')
let ShinyImg = true;
let Ability1 = document.getElementById('ability1')
let Ability2 = document.getElementById('ability2')
let Ability3 = document.getElementById('ability3')
let ShinyBool = true
let Default = ""
let Shiny = ""
let userInput = "";
let FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`
let ChainNum = 1;
let EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`
let FirstType = ""
let SecondType = ""
let Search = document.getElementById('search')
let LocationInfo = document.getElementById('location')
let MoveArr = [];
let list = document.getElementById('list')
let BGMusic = document.getElementById('bgMusic')
let RandomNum = Math.floor(Math.random() * 650);
let Mute = document.getElementById('mute')
let MuteBool = true;

let SearchBtn = document.getElementById('searchBtn')
let RandomBtn = document.getElementById('randomBtn')

let HP = document.getElementById('HP')
let Attack = document.getElementById('Attack')
let Defense = document.getElementById('Defense')
let SpAttack = document.getElementById('SpAttack')
let SpDefense = document.getElementById('SpDefense')
let Speed = document.getElementById('Speed')

BGMusic.loop = true

function Music(){
    BGMusic.play()
}

onload=Music()

Mute.addEventListener("click", async ()=>{
  if(MuteBool === true){
      BGMusic.pause();
      BGMusic.currentTime = 0;
      document.getElementById('audioOn').src="assets/volume-mute-fill.svg"
      MuteBool = false;
    } else if (MuteBool === false){
      BGMusic.play();
      MuteBool = true;
      document.getElementById('audioOn').src="assets/volume-down-fill.svg"
  }

})

function ToUpper(input){
  return input.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');
}

function Types1(){
  switch(FirstType){

    case 'normal':
      document.getElementById('type').src="/assets/pokemonTypes/Normal.png"
      break;
    case 'fighting':
      document.getElementById('type').src="/assets/pokemonTypes/Fighting.png"
      break;
    case 'flying':
      document.getElementById('type').src="/assets/pokemonTypes/Flying.png"
      break;
    case 'poison':
      document.getElementById('type').src="/assets/pokemonTypes/Poison.png"
      break;
    case 'ground':
      document.getElementById('type').src="/assets/pokemonTypes/Ground.png"
      break;
    case 'rock':
      document.getElementById('type').src="/assets/pokemonTypes/Rock.png"
      break;
    case 'bug':
      document.getElementById('type').src="/assets/pokemonTypes/Bug.png"
      break;
    case 'ghost':
      document.getElementById('type').src="/assets/pokemonTypes/Ghost.png"
      break;
    case 'steel':
      document.getElementById('type').src="/assets/pokemonTypes/Steel.png"
      break;
    case 'fire':
      document.getElementById('type').src="/assets/pokemonTypes/Fire.png"
      break;
    case 'water':
      document.getElementById('type').src="/assets/pokemonTypes/Water.png"
      break;
    case 'grass':
      document.getElementById('type').src="/assets/pokemonTypes/Grass.png"
      break;
    case 'electric':
      document.getElementById('type').src="/assets/pokemonTypes/Electric.png"
      break;
    case 'psychic':
      document.getElementById('type').src="/assets/pokemonTypes/Psychic.png"
      break;
    case 'ice':
      document.getElementById('type').src="/assets/pokemonTypes/Ice.png"
      break;
    case 'dragon':
      document.getElementById('type').src="/assets/pokemonTypes/Dragon.png"
      break;
    case 'dark':
      document.getElementById('type').src="/assets/pokemonTypes/Dark.png"
      break;
    case 'fairy':
      document.getElementById('type').src="/assets/pokemonTypes/Fairy.png"
      break;
      default:
      
      break;
  }
}
function Types2(){
  switch(SecondType){

    case 'normal':
      document.getElementById('type2').src="/assets/pokemontypes/Normal.png"
      break;
    case 'fighting':
      document.getElementById('type2').src="/assets/pokemontypes/Fighting.png"
      break;
    case 'flying':
      document.getElementById('type2').src="/assets/pokemontypes/Flying.png"
      break;
    case 'poison':
      document.getElementById('type2').src="/assets/pokemontypes/Poison.png"
      break;
    case 'ground':
      document.getElementById('type2').src="/assets/pokemontypes/Ground.png"
      break;
    case 'rock':
      document.getElementById('type2').src="/assets/pokemontypes/Rock.png"
      break;
    case 'bug':
      document.getElementById('type2').src="/assets/pokemontypes/Bug.png"
      break;
    case 'ghost':
      document.getElementById('type2').src="/assets/pokemontypes/Ghost.png"
      break;
    case 'steel':
      document.getElementById('type2').src="/assets/pokemontypes/Steel.png"
      break;
    case 'fire':
      document.getElementById('type2').src="/assets/pokemontypes/Fire.png"
      break;
    case 'water':
      document.getElementById('type2').src="/assets/pokemontypes/Water.png"
      break;
    case 'grass':
      document.getElementById('type2').src="/assets/pokemontypes/Grass.png"
      break;
    case 'electric':
      document.getElementById('type2').src="/assets/pokemontypes/Electric.png"
      break;
    case 'psychic':
      document.getElementById('type2').src="/assets/pokemontypes/Psychic.png"
      break;
    case 'ice':
      document.getElementById('type2').src="/assets/pokemontypes/Ice.png"
      break;
    case 'dragon':
      document.getElementById('type2').src="/assets/pokemontypes/Dragon.png"
      break;
    case 'dark':
      document.getElementById('type2').src="/assets/pokemontypes/Dark.png"
      break;
    case 'fairy':
      document.getElementById('type2').src="/assets/pokemontypes/Fairy.png"
      break;
      case '':
        Type2.hidden = true;
      default:
      break
      break;
  }
}

const getPokemon = async () => {
    // const EvolutionChain = async () => {
    //   const promise = await fetch(EvolutionLink);
    //   const data = await promise.json()
    //   let EvolutionChain = (data.evolution_chain.url)
    //   console.log(EvolutionChain)

    //   const GetEvolutionChain = async() => {
    //     const promise = await fetch(EvolutionChain);
    //     const data = await promise.json()
    //     console.log(data)
    //   }
    //   GetEvolutionChain()
    // }
    // EvolutionChain()

    const promise = await fetch(FetchLink);
    const data = await promise.json()
    console.log(data)
    Name.innerText = "#" + data.id + " - " + ToUpper(data.name.replaceAll('-', ' '))
    document.getElementById('pokemonImg').src=data.sprites.other.home.front_default;
    Default = data.sprites.other.home.front_default
    HP.innerText = "HP: " + data.stats[0].base_stat;
    Attack.innerText = "Attack: " + data.stats[1].base_stat;
    Defense.innerText = "Defense: " + data.stats[2].base_stat;
    SpAttack.innerText = "Sp. Attack: " + data.stats[3].base_stat;
    SpDefense.innerText = "Sp. Defense: " + data.stats[4].base_stat;
    Speed.innerText = "Speed: " + data.stats[5].base_stat;
    Shiny = data.sprites.other.home.front_shiny
    ShinyImg = true;

    FirstType = data.types[0].type.name
    if(data.types.length === 2){
      SecondType = data.types[1].type.name
      Type2.hidden = false
      Types2()
    } else {
      Type2.hidden = true
    }

    function AbilityCheck(){
      if(data.abilities.length == 1){
        Ability1.innerText = ToUpper(data.abilities[0].ability.name.replaceAll('-', ' '))
        Ability2.hidden = true;
        Ability3.hidden = true;
      } else if (data.abilities.length == 2)
        {
          Ability1.innerText = ToUpper(data.abilities[0].ability.name.replaceAll('-', ' '))
          Ability2.innerText = "HA: " + ToUpper(data.abilities[1].ability.name.replaceAll('-', ' '))
          Ability2.hidden = false;
          Ability3.hidden = true;
        } else if (data.abilities.length == 3)
          {
            Ability1.innerText = ToUpper(data.abilities[0].ability.name.replaceAll('-', ' '))
            Ability2.innerText = ToUpper(data.abilities[1].ability.name.replaceAll('-', ' '))
            Ability3.innerText = "HA: " + ToUpper(data.abilities[2].ability.name.replaceAll('-', ' '))
            Ability2.hidden = false;
            Ability3.hidden = false;
          } 
    }

    Types1()
    AbilityCheck()

    let Location = data.location_area_encounters;
    const GetLocation = async () => {
      const promise = await fetch(Location);
      const data = await promise.json()
      let LocationNum = Math.floor(Math.random() * (data.length));
      if (data.length === 0){
        LocationInfo.innerText = 'N/A';
      }else{
        LocationInfo.innerText = ToUpper(data[LocationNum].location_area.name.replaceAll('-', ' '));
      }
    }
    GetLocation()
    for(let i = 0; i < data.moves.length; i++){
      MoveArr.push(data.moves[i].move.name)
      let ul = document.createElement('ul');
      ul.innerText = ToUpper(data.moves[i].move.name.replaceAll('-', ' '));
      list.appendChild(ul);
    }
    function PokemonmAudio(){
      document.getElementById('pokemonCry').src=data.cries.latest
      PokemonCry.play()
    }
    PokemonmAudio()
};

function empty(element) {
  element.innerHTML = ""; 
}

function SearchFunction(){
  userInput = Search.value
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`
  Default = ""
  Shiny = ""
  document.getElementById('shinyIcon').src="/assets/Shiny.png";
  ShinyImg = true;
  getPokemon()
  empty(list)
}

Search.addEventListener('keypress', async ()=>{
  if(event.key === 'Enter'){
    SearchFunction()
  }
})

SearchBtn.addEventListener('click', async ()=>{
    SearchFunction()
})

function ShinyFunction(){      
  ShinyBtn.addEventListener('click', async ()=>{
    if(ShinyImg === true){
      document.getElementById('pokemonImg').src=Shiny;
      document.getElementById('shinyIcon').src="/assets/ShinyActive.png";
      ShinyImg = false;
    } else {
      document.getElementById('pokemonImg').src=Default;
      document.getElementById('shinyIcon').src="/assets/Shiny.png";
      ShinyImg = true;
    }
  })
}
ShinyFunction()

RandomBtn.addEventListener('click', async ()=>{
  RandomNum = Math.floor(Math.random() * 650);
  userInput = RandomNum;
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`
  Default = ""
  Shiny = ""
  document.getElementById('shinyIcon').src="/assets/Shiny.png";
  ShinyImg = true;
  getPokemon()
  empty(list)
})

function RandomPokemon(){
  userInput = RandomNum;
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`
  EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`
  getPokemon()
  }
  RandomPokemon()

  // Name = data.name
  // Type 1 = data.types[0].type.name
  // Type 1 = data.types[1].type.name
  // Ability 1 = data.abilities[0].ability.name
  // Ability 2 = data.abilities[1].ability.name
  // Ability 3 = data.abilities[2].ability.name
  // Moves = data.moves
  // Location = data.location_area_encounters
  // Img = data.sprites.other.home.front_default
  // ImgShiny = data.sprites.other.home.front_shiny
  // Cry = data.cries.latest