function saveToLocalStorage(saved){
    let savedArr = getFromLocalStorage();

    if(!savedArr.includes(saved)){
        savedArr.push(saved);
    }

    localStorage.setItem('SavedPokemonList', JSON.stringify(savedArr))
}

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('SavedPokemonList');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

function removeFromLocalStorage(saved){
    let localStorageData = getFromLocalStorage();

    let savedIndex =  localStorageData.indexOf(saved);

    localStorageData.splice(savedIndex, 1);

    localStorage.setItem('SavedPokemonList', JSON.stringify(localStorageData))
}

export{saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage}