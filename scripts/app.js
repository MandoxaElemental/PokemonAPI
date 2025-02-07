import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "/localstorage.js";

let Home = document.getElementById("homeScreen")
let DexMenu = document.getElementById("dex")



let Name = document.getElementById("name");
let PokemonCry = document.getElementById("pokemonCry");
let convertedNum = 0;
let Type = document.getElementById("type");
let Type2 = document.getElementById("type2");
let PokemonImg = document.getElementById("pokemonImg");
let ShinyBtn = document.getElementById("shiny");
let ShinyImg = true;
let Ability1 = document.getElementById("ability1");
let Ability2 = document.getElementById("ability2");
let Ability3 = document.getElementById("ability3");
let Default = "";
let Shiny = "";
let userInput = "";
let FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
let PokemonID = "";
let FinalImgFetchLink = `https://pokeapi.co/api/v2/pokemon/${PokemonID}`;
let FinalImgFetchLink2 = `https://pokeapi.co/api/v2/pokemon/${PokemonID}`;
let EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
let ImgFetchLink = "";
let ImgFetchLink2 = "";
let FirstType = "";
let SecondType = "";
let Search = document.getElementById("search");
let LocationInfo = document.getElementById("location");
let MoveArr = [];
let EvolutionArr = [];
let EvolutionUrlArr = [];
let Family = document.getElementById("family");
let list = document.getElementById("list");
let BGMusic = document.getElementById("bgMusic");
let ShinyAudio = document.getElementById("shinyAudio");
let RandomNum = Math.floor(Math.random() * 650);
let Mute = document.getElementById("mute");
let MuteBool = true;
let SavedList = document.getElementById("savedBtn");
let DropdownContent = document.getElementById("dropdownContent");
let storedValue = document.getElementById("storedValue");
let X = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`;
let PokemonAudioBool = true;

document.getElementById("bgMusic").src = "/public/assets/audio/Pokémon TCG Pocket OST - Feed Menu BGM [ ezmp3.cc ].mp3";
let Varieties = []

let CurrentMon = "";

let SpecialPokemonArr = [
  "deoxys",
  "wormadam",
  "shaymin",
  "giratina",
  "basculin",
  "darmanitan",
  "meloetta",
  "tornadus",
  "thundurus",
  "landorus",
  "basculegion",
  "dudunsparce",
  "tatsugiri",
  "oricorio",
  "aegislash",
  "urshifu",
  "zygarde",
  "indeedee",
  "meowstic",
  "oinkologne",
  "wishiwashi",
  "gourgeist",
  "squawkabilly",
  "lycanroc",
  "farfetchd",
  "sirfetchd",
  "type null",
  "toxtricity"
]
let SpecialPokemonNum = [
  "386",
  "413",
  "492",
  "487",
  "550",
  "555",
  "648",
  "641",
  "642",
  "645",
  "902",
  "982",
  "978",
  "741",
  "681",
  "892",
  "718",
  "876",
  "678",
  "916",
  "746",
  "711",
  "931",
  "745",
  "83",
  "865",
  "772",
  "849"
]

let SpecialNamesArr = [
"ho-oh",
"porygon-z",
"jangmo-o",
"hakamo-o",
"kommo-o",
"wo-chien",
"chien-pao",
"ting-lu",
"chi-yu",
"deoxys-normal",
"wormadam-plant",
"shaymin-land",
"giratina-altered",
"basculin-red-striped",
"darmanitan-standard",
"meloetta-aria",
"tornadus-incarnate",
"thundurus-incarnate",
"landorus-incarnate",
"mime-jr",
"mr-mime",
"mr-rime",
"basculegion-male",
"dudunsparce-two-segment",
"tatsugiri-curly",
"oricorio-baille",
"aegislash-shield",
"urshifu-single-strike",
"zygarde-50",
"indeedee-male",
"meowstic-male",
"oinkologne-male",
"wishiwashi-solo",
"gourgeist-average",
"squawkabilly-green-plumage",
"lycanroc-midday",
"farfetchd",
"sirfetchd",
"type-null",
"toxtricity-amped"
]
let ScreenNameArr = [
"Ho-oh",
"Porygon-z",
"Jangmo-o",
"Hakamo-o",
"Kommo-o",
"Wo-Chien",
"Chien-Pao",
"Ting-Lu",
"Chi-Yu",
"Deoxys",
"Wormadam",
"Shaymin",
"Giratina",
"Basculin",
"Darmanitan",
"Meloetta",
"Tornadus",
"Thundurus",
"Landorus",
"Mime Jr.",
"Mr. Mime",
"Mr. Rime",
"Basculegion",
"Dudunsparce",
"Tatsugiri",
"Oricorio",
"Aegislash",
"Urshifu",
"Zygarde",
"Indeedee",
"Meowstic",
"Oinkologne",
"Wishiwashi",
"Gourgeist",
"Squawkabilly",
"Lycanroc",
"Farfetch'd",
"Sirfetch'd",
"Type: Null",
"Toxtricity"
]

let SearchBtn = document.getElementById("searchBtn");
let RandomBtn = document.getElementById("randomBtn");
let SaveBtn = document.getElementById("savedPokemon");
let SaveBool = true;

let HP = document.getElementById("HP");
let Attack = document.getElementById("Attack");
let Defense = document.getElementById("Defense");
let SpAttack = document.getElementById("SpAttack");
let SpDefense = document.getElementById("SpDefense");
let Speed = document.getElementById("Speed");

let MissingNoArr = [
  "Mega Punch",
  "Razor Wind",
  "Swords Dance",
  "Mega Kick",
  "Toxic",
  "Take Down",
  "Double-Edge",
  "Bubble Beam",
  "Ice Beam",
  "Blizzard",
  "Submission",
  "Seismic Toss",
  "Rage",
  "Thunder",
  "Earthquake",
  "Fissure",
  "Psychic",
  "Teleport",
  "Sky Attack",
  "Rest",
  "Thunder Wave",
  "Tri Attack",
  "Substitute",
  "Cut",
  "Fly",
  "Pay Day",
  "Bind",
  "Water Gun",
];
let MissingNoLocation = [
  "Old Man Glitch",
  "Mew Glitch",
  "Time Capsule Exploit",
];
let MissingNoFamily = [
  "/public/assets/Missingno_RB.png",
  "/public/assets/Missingno_Y.png",
  "/public/assets/Spr_1b_142_f.png",
  "/public/assets/Spr_1b_141_f.png",
  "/public/assets/Ghost_I.png",
];

let Start = document.getElementById('start')

Start.className = "pulse"

Home.addEventListener("click", function () {
  Home.className = "hidden";
  DexMenu.className = "fadeIn";
  Music();
  RandomPokemon();
  document.getElementById("bgMusic").loop = true;
  document.getElementById("shinyAudio").src = "/public/assets/audio/Gen 9 Shiny Sparkle Sound Effect - Pokémon Scarlet and Violet [ ezmp3.cc ].mp3";
});

BGMusic.loop = true;

function Music() {
  BGMusic.play();
}

Mute.addEventListener("click", async () => {
  if (MuteBool === true) {
    BGMusic.pause();
    BGMusic.currentTime = 0;
    document.getElementById("audioOn").src = "/public/assets/volume-mute-fill.svg";
    MuteBool = false;
    PokemonAudioBool = false;
  } else if (MuteBool === false) {
    Music();
    MuteBool = true;
    document.getElementById("audioOn").src = "/public/assets/volume-down-fill.svg";
    PokemonAudioBool = true;
  }
});

function ToUpper(input) {
  return input
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function Types1() {
  switch (FirstType) {
    case "normal":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Normal.png";
      break;
    case "fighting":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Fighting.png";
      break;
    case "flying":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Flying.png";
      break;
    case "poison":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Poison.png";
      break;
    case "ground":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Ground.png";
      break;
    case "rock":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Rock.png";
      break;
    case "bug":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Bug.png";
      break;
    case "ghost":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Ghost.png";
      break;
    case "steel":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Steel.png";
      break;
    case "fire":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Fire.png";
      break;
    case "water":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Water.png";
      break;
    case "grass":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Grass.png";
      break;
    case "electric":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Electric.png";
      break;
    case "psychic":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Psychic.png";
      break;
    case "ice":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Ice.png";
      break;
    case "dragon":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Dragon.png";
      break;
    case "dark":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Dark.png";
      break;
    case "fairy":
      document.getElementById("type").src = "/public/assets/pokemonTypes/Fairy.png";
      break;
    default:
      break;
  }
}
function Types2() {
  switch (SecondType) {
    case "normal":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Normal.png";
      break;
    case "fighting":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Fighting.png";
      break;
    case "flying":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Flying.png";
      break;
    case "poison":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Poison.png";
      break;
    case "ground":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Ground.png";
      break;
    case "rock":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Rock.png";
      break;
    case "bug":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Bug.png";
      break;
    case "ghost":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Ghost.png";
      break;
    case "steel":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Steel.png";
      break;
    case "fire":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Fire.png";
      break;
    case "water":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Water.png";
      break;
    case "grass":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Grass.png";
      break;
    case "electric":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Electric.png";
      break;
    case "psychic":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Psychic.png";
      break;
    case "ice":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Ice.png";
      break;
    case "dragon":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Dragon.png";
      break;
    case "dark":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Dark.png";
      break;
    case "fairy":
      document.getElementById("type2").src = "/public/assets/pokemontypes/Fairy.png";
      break;
    case "":
      Type2.hidden = true;
    default:
      break;
      break;
  }
}

const EvolutionChain = async () => {
  try {
    Varieties = [];
    const promise = await fetch(EvolutionLink);
    const data = await promise.json();
    let EvolutionChain = data.evolution_chain.url;
    const GetEvolutionChain = async () => {
      const promise = await fetch(EvolutionChain);
      const data = await promise.json();
      EvolutionArr.push(data.chain.species.name);
      EvolutionUrlArr.push(data.chain.species.url);
      if (data.chain.evolves_to.length !== 0) {
        for (let i = 0; i < data.chain.evolves_to.length; i++) {
          EvolutionArr.push(data.chain.evolves_to[i].species.name);
          EvolutionUrlArr.push(data.chain.evolves_to[i].species.url);
          if (data.chain.evolves_to[i].evolves_to.length !== 0) {
            for (let j = 0; j < data.chain.evolves_to[i].evolves_to.length; j++)
              {
              EvolutionArr.push(data.chain.evolves_to[i].evolves_to[j].species.name);
              EvolutionUrlArr.push(data.chain.evolves_to[i].evolves_to[j].species.url);
              if (data.chain.evolves_to[i].evolves_to[j].evolves_to.length !== 0) {
                for (let k = 0; k < data.chain.evolves_to[i].evolves_to[j].evolves_to.length;k++)
                  {
                  EvolutionArr.push(data.chain.evolves_to[i].evolves_to[j].evolves_to[k].species.name);
                  EvolutionUrlArr.push(data.chain.evolves_to[i].evolves_to[j].evolves_to[k].species.url
                  );
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < EvolutionUrlArr.length; i++) {
        ImgFetchLink = EvolutionUrlArr[i];
        const FamilyImg = async () => {
          const promise = await fetch(ImgFetchLink);
          const data = await promise.json();
          let PokemonID = data.id;
          FinalImgFetchLink = `https://pokeapi.co/api/v2/pokemon/${PokemonID}`;
          const FinalImg = async () => {
            const promise = await fetch(FinalImgFetchLink);
            const data = await promise.json();
            let familyName = document.createElement("img");
            familyName.src = data.sprites.other.home.front_default;
            familyName.setAttribute("class", "family");
            familyName.setAttribute("id", EvolutionArr[i]);
            Family.appendChild(familyName);
          };
          FinalImg();
        };
        FamilyImg();
      }
      const VarietyChain = async () =>{
        for(let i=0; i<EvolutionUrlArr.length; i++){
          let BlankUrl = EvolutionUrlArr[i]
          const promise = await fetch(BlankUrl);
          const data = await promise.json();
            for(let i=1; i<data.varieties.length; i++){
              let duplicate = false;
              for(let j=0; j<Varieties.length; j++){
                if(data.varieties[i].pokemon.name == Varieties[j]){
                  duplicate = true
                }
              }
              if(!duplicate){
                Varieties.push(data.varieties[i].pokemon.url);
              }
          }
        }
        for (let i = 0; i < Varieties.length; i++) {
          ImgFetchLink2 = Varieties[i];
          const FamilyImg2 = async () => {
            const promise = await fetch(ImgFetchLink2);
            const data = await promise.json();
            let PokemonID = data.id;
            FinalImgFetchLink2 = `https://pokeapi.co/api/v2/pokemon/${PokemonID}`;
            const FinalImg2 = async () => {
              const promise = await fetch(FinalImgFetchLink2);
              const data = await promise.json();
              let familyName = document.createElement("img");
              if(data.sprites.other.home.front_default === null){
                familyName.src = "/public/assets/pokeball-pokemon-catch.svg"
              } else {
                familyName.src = data.sprites.other.home.front_default;
              }
              familyName.setAttribute("class", "family");
              familyName.setAttribute("id", EvolutionArr[i]);
              Family.appendChild(familyName);
            };
            FinalImg2();
          };
          FamilyImg2();
        }
      }
      VarietyChain()
    };
    GetEvolutionChain();
    
  } catch (error) {
    MissingNoInfo()
  }
};

const getPokemon = async () => {
  EvolutionArr = [];
  EvolutionUrlArr = [];
  EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
  try {
    EvolutionChain();
  } catch (error) {
    alert('test')
  }

  const promise = await fetch(FetchLink);
  const data = await promise.json();
  SpecificNames();
  let DexNum = Number(data.id)
  document.getElementById("pokemonImg").src =data.sprites.other.home.front_default;
  Default = data.sprites.other.home.front_default;
  HP.innerText = "HP: " + data.stats[0].base_stat;
  Attack.innerText = "Attack: " + data.stats[1].base_stat;
  Defense.innerText = "Defense: " + data.stats[2].base_stat;
  SpAttack.innerText = "Sp.Attack: " + data.stats[3].base_stat;
  SpDefense.innerText = "Sp.Defense: " + data.stats[4].base_stat;
  Speed.innerText = "Speed: " + data.stats[5].base_stat;
  Shiny = data.sprites.other.home.front_shiny;
  ShinyImg = true;
  FirstType = data.types[0].type.name;
  let Location = data.location_area_encounters;
  if (data.types.length === 2) {
    SecondType = data.types[1].type.name;
    Type2.hidden = false;
    Types2();
  } else {
    Type2.hidden = true;
  }

  function SpecificNames() {
    for(let i=0; i<SpecialNamesArr.length; i++)
    if (data.name === SpecialNamesArr[i]) {
      Name.innerText = "#" + data.id + " - " + ScreenNameArr[i];
      CurrentMon = ScreenNameArr[i];
      break;
    } else {
      Name.innerText =
        "#" + data.id + " - " + ToUpper(data.name.replaceAll("-", " "));
        CurrentMon = ToUpper(data.name.replaceAll("-", " "));
    }
  }
  function AbilityCheck() {
    if (data.abilities.length == 1) {
      Ability1.innerText = ToUpper(
        data.abilities[0].ability.name.replaceAll("-", " ")
      );
      Ability2.hidden = true;
      Ability3.hidden = true;
    } else if (data.abilities.length == 2) {
      Ability1.innerText = ToUpper(
        data.abilities[0].ability.name.replaceAll("-", " ")
      );
      Ability2.innerText =
        "HA: " + ToUpper(data.abilities[1].ability.name.replaceAll("-", " "));
      Ability2.hidden = false;
      Ability3.hidden = true;
    } else if (data.abilities.length == 3) {
      Ability1.innerText = ToUpper(
        data.abilities[0].ability.name.replaceAll("-", " ")
      );
      Ability2.innerText = ToUpper(
        data.abilities[1].ability.name.replaceAll("-", " ")
      );
      Ability3.innerText =
        "HA: " + ToUpper(data.abilities[2].ability.name.replaceAll("-", " "));
      Ability2.hidden = false;
      Ability3.hidden = false;
    }
  }
  const GetLocation = async () => {
    const promise = await fetch(Location);
    const data = await promise.json();
    let LocationNum = Math.floor(Math.random() * data.length);
    if (data.length === 0) {
      if(DexNum >= 984 && DexNum < 996){
        LocationInfo.innerText = "Area Zero"
      } else {
        LocationInfo.innerText = "N/A";
      }
    } else {
      LocationInfo.innerText = ToUpper(
        data[LocationNum].location_area.name.replaceAll("-", " ")
      );
    }
  };
   function PokemonAudio() {
    if(PokemonAudioBool === true){
      document.getElementById("pokemonCry").src = data.cries.latest;
      PokemonCry.play();
    }
  }
  function MoveFunction(){
    for (let i = 0; i < data.moves.length; i++) {
      MoveArr.push(data.moves[i].move.name);
      let ul = document.createElement("ul");
      ul.innerText = ToUpper(data.moves[i].move.name.replaceAll("-", " "));
      list.appendChild(ul);
    }
  }
  Types1();
  AbilityCheck();
  GetLocation();
  MoveFunction();
  PokemonAudio();
  IsSaved();
};

function empty(element) {
  element.innerHTML = "";
}

function SpecificSearches(){
  for (let i=0; i < SpecialPokemonNum.length; i++){
    if(userInput.toLowerCase() === SpecialPokemonArr[i] || userInput === SpecialPokemonNum[i]){
        FetchLink = `https://pokeapi.co/api/v2/pokemon/${SpecialPokemonNum[i]}`;
        EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${SpecialPokemonNum[i]}`;
        break;
    } else {
      FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
      EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
    }
  }
}

function NumberCheck(){
  convertedNum = Number(userInput);
  if (convertedNum >= 0){
    if(convertedNum > 1025){
      userInput = "0"
    }
  }
}

function SearchFunction() {
  userInput = Search.value.replaceAll(" ", "-");
  NumberCheck()
  SpecificSearches()
  Default = "";
  Shiny = "";
  document.getElementById("shinyIcon").src = "/public/assets/Shiny.png";
  ShinyImg = true;
  empty(list);
  empty(Family);
  getPokemon();

  if (userInput === "" || userInput === "0") {
    MissingNoInfo();
  }
}

// function FamilyBtn() {
//   empty(list);
//   empty(Family);
//   MissingNoInfo();
// }

Search.addEventListener("keypress", async () => {
  if (event.key === "Enter") {
    SearchFunction();
    Search.value = "";
  }
});

SearchBtn.addEventListener("click", async () => {
  SearchFunction();
  Search.value = "";
});

function ShinyFunction() {
  ShinyBtn.addEventListener("click", async () => {
    if (ShinyImg === true) {
      if (Name.innerText === "#000 - MissingNo.") {
        document.getElementById("pokemonImg").src = "/public/assets/Ketsuban.png";
      } else {
        document.getElementById("pokemonImg").src = Shiny;
      }
      ShinyAudio.play();
      document.getElementById("shinyIcon").src = "/public/assets/ShinyActive.png";
      ShinyImg = false;
    } else {
      if (Name.innerText === "#000 - MissingNo.") {
        document.getElementById("pokemonImg").src = "/public/assets/Missingno_RB.png";
      } else {
        document.getElementById("pokemonImg").src = Default;
      }
      document.getElementById("shinyIcon").src = "/public/assets/Shiny.png";
      ShinyImg = true;
    }
  });
}
ShinyFunction();

RandomBtn.addEventListener("click", async () => {
  RandomNum = Math.floor(Math.random() * 1026);
  userInput = RandomNum;
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
  Default = "";
  Shiny = "";
  document.getElementById("shinyIcon").src = "/public/assets/Shiny.png";
  ShinyImg = true;
  getPokemon();
  empty(list);
  empty(Family);
});

function RandomPokemon() {
  userInput = RandomNum;
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
  EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
  getPokemon();
}

function MissingNoInfo() {
  Name.innerText = "#000 - MissingNo.";
  document.getElementById("pokemonImg").src = "/public/assets/Missingno_RB.png";
  HP.innerText = "HP: 33";
  Attack.innerText = "Attack: 136";
  Defense.innerText = "Defense: 0";
  SpAttack.innerText = "Sp.Attack: 6";
  SpDefense.innerText = "Sp.Defense: 0";
  Speed.innerText = "Speed: 29";
  Ability1.innerText = "N/A";
  Ability2.hidden = true;
  Ability3.hidden = true;
  LocationInfo.innerText = "N/A";
  document.getElementById("type").src = "/public/assets/pokemonTypes/Normal.png";
  Type2.hidden = true;
  CurrentMon = "0";

  for (let i = 0; i < MissingNoArr.length; i++) {
    MoveArr.push(MissingNoArr[i]);
    let ul = document.createElement("ul");
    ul.innerText = MissingNoArr[i];
    list.appendChild(ul);
  }

  let LocationNum = Math.floor(Math.random() * MissingNoLocation.length);
  LocationInfo.innerText = MissingNoLocation[LocationNum];

  document.getElementById("pokemonCry").src = "/public/assets/audio/MissingNoCry.wav";
  PokemonCry.play();

  for (let i = 0; i < MissingNoFamily.length; i++) {
    let familyName = document.createElement("img");
    familyName.src = MissingNoFamily[i];
    familyName.setAttribute("class", "family");
    familyName.setAttribute("id", EvolutionArr[i]);
    Family.appendChild(familyName);
  }
}

function IsSaved() {
  if (getFromLocalStorage().includes(CurrentMon)) {
    document.getElementById("savedPokemon").src = "/public/assets/2Active.svg";
  } else {
    document.getElementById("savedPokemon").src = "/public/assets/2.svg";
  }
}

SaveBtn.addEventListener("click", async () => {
  if (getFromLocalStorage().includes(CurrentMon)) {
    document.getElementById("savedPokemon").src = "/public/assets/2.svg";
    SaveBool = true
    removeFromLocalStorage(CurrentMon);
    createElements();
  } else {
    document.getElementById("savedPokemon").src = "/public/assets/2Active.svg";
    SaveBool = false
    saveToLocalStorage(CurrentMon);
    createElements();
  }
});

SavedList.addEventListener("click", async () => {
  if (DropdownContent.style.display === "none") {
    DropdownContent.style.display = "block";
    createElements();
  } else {
    DropdownContent.style.display = "none";
  }
});

function createElements() {
  let LocalPokemon = getFromLocalStorage();
  storedValue.innerHTML = "";

  LocalPokemon.map((SavedPokemonList) => {
    let p = document.createElement("p");
    p.className = "yourSaved";
    p.textContent = SavedPokemonList;
    p.setAttribute("id", SavedPokemonList);

    let deletebtn = document.createElement("button");
    deletebtn.type = "button";
    deletebtn.className = "removePokemon";
    deletebtn.innerHTML = X;

    deletebtn.addEventListener("click", async () => {
      
      removeFromLocalStorage(SavedPokemonList);
      p.remove();
    });

    p.appendChild(deletebtn);

    storedValue.appendChild(p);
  });

  let entries = document.getElementsByClassName("yourSaved");
  for (let i = 0; i < entries.length; i++) {
      entries[i].addEventListener("click", function (e) {
        userInput = entries[i].textContent;
        FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
        EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
        Default = "";
        Shiny = "";
        document.getElementById("shinyIcon").src = "/public/assets/Shiny.png";
        ShinyImg = true;
        empty(list);
        empty(Family);
        getPokemon();
      });
  }
}

DropdownContent.addEventListener("mouseover", async () => {
  DropdownContent.style.display = "block";
});
DropdownContent.addEventListener("mouseout", async () => {
  DropdownContent.style.display = "none";
});

PokemonImg.addEventListener('click', async () => {
  PokemonCry.play()
})

function ExtendedFamily(){
    
}