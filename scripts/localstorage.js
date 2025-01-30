function saveToLocalStorage(saved){
    let savedArr = getFromLocalStorage();

    if(!savedArr.includes(saved)){
        savedArr.push(saved);
    }

    localStorage.setItem('SavedPokemon', JSON.stringify(savedArr))
}

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('SavedPokemon');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

function removeFromLocalStorage(saved){
    let localStorageData = getFromLocalStorage();

    let savedIndex =  localStorageData.indexOf(saved);

    localStorageData.splice(savedIndex, 1);

    localStorage.setItem('SavedPokemon', JSON.stringify(localStorageData))
}

export{saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage}