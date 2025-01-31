import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "./localstorage.js";

let Name = document.getElementById("name");
let PokemonCry = document.getElementById("pokemonCry");
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
let EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
let ImgFetchLink = "";
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
  "landorus"
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
  "645"
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
"landorus-incarnate"
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
"Landorus"
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
  "/assets/Missingno_RB.png",
  "/assets/Missingno_Y.png",
  "/assets/Spr_1b_142_f.png",
  "/assets/Spr_1b_141_f.png",
  "/assets/Ghost_I.png",
];

BGMusic.loop = true;

function Music() {
  BGMusic.play();
}

onload = Music();

Mute.addEventListener("click", async () => {
  if (MuteBool === true) {
    BGMusic.pause();
    BGMusic.currentTime = 0;
    document.getElementById("audioOn").src = "assets/volume-mute-fill.svg";
    MuteBool = false;
  } else if (MuteBool === false) {
    Music();
    MuteBool = true;
    document.getElementById("audioOn").src = "assets/volume-down-fill.svg";
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
      document.getElementById("type").src = "/assets/pokemonTypes/Normal.png";
      break;
    case "fighting":
      document.getElementById("type").src = "/assets/pokemonTypes/Fighting.png";
      break;
    case "flying":
      document.getElementById("type").src = "/assets/pokemonTypes/Flying.png";
      break;
    case "poison":
      document.getElementById("type").src = "/assets/pokemonTypes/Poison.png";
      break;
    case "ground":
      document.getElementById("type").src = "/assets/pokemonTypes/Ground.png";
      break;
    case "rock":
      document.getElementById("type").src = "/assets/pokemonTypes/Rock.png";
      break;
    case "bug":
      document.getElementById("type").src = "/assets/pokemonTypes/Bug.png";
      break;
    case "ghost":
      document.getElementById("type").src = "/assets/pokemonTypes/Ghost.png";
      break;
    case "steel":
      document.getElementById("type").src = "/assets/pokemonTypes/Steel.png";
      break;
    case "fire":
      document.getElementById("type").src = "/assets/pokemonTypes/Fire.png";
      break;
    case "water":
      document.getElementById("type").src = "/assets/pokemonTypes/Water.png";
      break;
    case "grass":
      document.getElementById("type").src = "/assets/pokemonTypes/Grass.png";
      break;
    case "electric":
      document.getElementById("type").src = "/assets/pokemonTypes/Electric.png";
      break;
    case "psychic":
      document.getElementById("type").src = "/assets/pokemonTypes/Psychic.png";
      break;
    case "ice":
      document.getElementById("type").src = "/assets/pokemonTypes/Ice.png";
      break;
    case "dragon":
      document.getElementById("type").src = "/assets/pokemonTypes/Dragon.png";
      break;
    case "dark":
      document.getElementById("type").src = "/assets/pokemonTypes/Dark.png";
      break;
    case "fairy":
      document.getElementById("type").src = "/assets/pokemonTypes/Fairy.png";
      break;
    default:
      break;
  }
}
function Types2() {
  switch (SecondType) {
    case "normal":
      document.getElementById("type2").src = "/assets/pokemontypes/Normal.png";
      break;
    case "fighting":
      document.getElementById("type2").src =
        "/assets/pokemontypes/Fighting.png";
      break;
    case "flying":
      document.getElementById("type2").src = "/assets/pokemontypes/Flying.png";
      break;
    case "poison":
      document.getElementById("type2").src = "/assets/pokemontypes/Poison.png";
      break;
    case "ground":
      document.getElementById("type2").src = "/assets/pokemontypes/Ground.png";
      break;
    case "rock":
      document.getElementById("type2").src = "/assets/pokemontypes/Rock.png";
      break;
    case "bug":
      document.getElementById("type2").src = "/assets/pokemontypes/Bug.png";
      break;
    case "ghost":
      document.getElementById("type2").src = "/assets/pokemontypes/Ghost.png";
      break;
    case "steel":
      document.getElementById("type2").src = "/assets/pokemontypes/Steel.png";
      break;
    case "fire":
      document.getElementById("type2").src = "/assets/pokemontypes/Fire.png";
      break;
    case "water":
      document.getElementById("type2").src = "/assets/pokemontypes/Water.png";
      break;
    case "grass":
      document.getElementById("type2").src = "/assets/pokemontypes/Grass.png";
      break;
    case "electric":
      document.getElementById("type2").src =
        "/assets/pokemontypes/Electric.png";
      break;
    case "psychic":
      document.getElementById("type2").src = "/assets/pokemontypes/Psychic.png";
      break;
    case "ice":
      document.getElementById("type2").src = "/assets/pokemontypes/Ice.png";
      break;
    case "dragon":
      document.getElementById("type2").src = "/assets/pokemontypes/Dragon.png";
      break;
    case "dark":
      document.getElementById("type2").src = "/assets/pokemontypes/Dark.png";
      break;
    case "fairy":
      document.getElementById("type2").src = "/assets/pokemontypes/Fairy.png";
      break;
    case "":
      Type2.hidden = true;
    default:
      break;
      break;
  }
}

const getPokemon = async () => {
  EvolutionArr = [];
  EvolutionUrlArr = [];
  EvolutionLink = `https://pokeapi.co/api/v2/pokemon-species/${userInput}`;
  const EvolutionChain = async () => {
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
            for (
              let j = 0;
              j < data.chain.evolves_to[i].evolves_to.length;
              j++
            ) {
              EvolutionArr.push(
                data.chain.evolves_to[i].evolves_to[j].species.name
              );
              EvolutionUrlArr.push(
                data.chain.evolves_to[i].evolves_to[j].species.url
              );
              if (
                data.chain.evolves_to[i].evolves_to[j].evolves_to.length !== 0
              ) {
                for (
                  let k = 0;
                  k < data.chain.evolves_to[i].evolves_to[j].evolves_to.length;
                  k++
                ) {
                  EvolutionArr.push(
                    data.chain.evolves_to[i].evolves_to[j].evolves_to[k].species
                      .name
                  );
                  EvolutionUrlArr.push(
                    data.chain.evolves_to[i].evolves_to[j].evolves_to[k].species
                      .url
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
            familyName.setAttribute("onClick", "FamilyBtn()");
            Family.appendChild(familyName);
          };
          FinalImg();
        };
        FamilyImg();
      }
    };
    GetEvolutionChain();
  };
  EvolutionChain();

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

  const promise = await fetch(FetchLink);
  const data = await promise.json();
  SpecificNames();
  document.getElementById("pokemonImg").src =
    data.sprites.other.home.front_default;
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
  if (data.types.length === 2) {
    SecondType = data.types[1].type.name;
    Type2.hidden = false;
    Types2();
  } else {
    Type2.hidden = true;
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

  Types1();
  AbilityCheck();

  let Location = data.location_area_encounters;
  const GetLocation = async () => {
    const promise = await fetch(Location);
    const data = await promise.json();
    let LocationNum = Math.floor(Math.random() * data.length);
    if (data.length === 0) {
      LocationInfo.innerText = "N/A";
    } else {
      LocationInfo.innerText = ToUpper(
        data[LocationNum].location_area.name.replaceAll("-", " ")
      );
    }
  };
  GetLocation();
  for (let i = 0; i < data.moves.length; i++) {
    MoveArr.push(data.moves[i].move.name);
    let ul = document.createElement("ul");
    ul.innerText = ToUpper(data.moves[i].move.name.replaceAll("-", " "));
    list.appendChild(ul);
  }
  function PokemonmAudio() {
    document.getElementById("pokemonCry").src = data.cries.latest;
    PokemonCry.play();
  }
  PokemonmAudio();
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

function SearchFunction() {
  userInput = Search.value.replaceAll(" ", "-");
  SpecificSearches()
  Default = "";
  Shiny = "";
  document.getElementById("shinyIcon").src = "/assets/Shiny.png";
  ShinyImg = true;
  empty(list);
  empty(Family);
  getPokemon();

  if (userInput === "" || userInput === "0") {
    MissingNoInfo();
  }
}

function FamilyBtn() {
  empty(list);
  empty(Family);
  MissingNoInfo();
}

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

function ShinySound(){
  ShinyAudio.play();
}

function ShinyFunction() {
  ShinyBtn.addEventListener("click", async () => {
    if (ShinyImg === true) {
      if (Name.innerText === "#000 - MissingNo.") {
        document.getElementById("pokemonImg").src = "/assets/Ketsuban.png";
      } else {
        document.getElementById("pokemonImg").src = Shiny;
      }
      document.getElementById("shinyIcon").src = "/assets/ShinyActive.png";
      ShinySound()
      ShinyImg = false;
    } else {
      if (Name.innerText === "#000 - MissingNo.") {
        document.getElementById("pokemonImg").src = "/assets/Missingno_RB.png";
      } else {
        document.getElementById("pokemonImg").src = Default;
      }
      document.getElementById("shinyIcon").src = "/assets/Shiny.png";
      ShinyImg = true;
    }
  });
}
ShinyFunction();

RandomBtn.addEventListener("click", async () => {
  RandomNum = Math.floor(Math.random() * 650);
  userInput = RandomNum;
  FetchLink = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
  Default = "";
  Shiny = "";
  document.getElementById("shinyIcon").src = "/assets/Shiny.png";
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
RandomPokemon();

function MissingNoInfo() {
  Name.innerText = "#000 - MissingNo.";
  document.getElementById("pokemonImg").src = "/assets/Missingno_RB.png";
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
  document.getElementById("type").src = "/assets/pokemonTypes/Normal.png";
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

  document.getElementById("pokemonCry").src = "/assets/audio/MissingNoCry.wav";
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
    document.getElementById("savedPokemon").src = "/assets/2Active.svg";
  } else {
    document.getElementById("savedPokemon").src = "/assets/2.svg";
  }
}

SaveBtn.addEventListener("click", async () => {
  if (getFromLocalStorage().includes(CurrentMon)) {
    document.getElementById("savedPokemon").src = "/assets/2.svg";
    SaveBool = true
    removeFromLocalStorage(CurrentMon);
    createElements();
  } else {
    document.getElementById("savedPokemon").src = "/assets/2Active.svg";
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
        document.getElementById("shinyIcon").src = "/assets/Shiny.png";
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