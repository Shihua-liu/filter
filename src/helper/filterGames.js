export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {

    // gaat door de games door maakt daar game van, alle titles worden hoofdletter en dan zoekt hij met index of welke woord of woorden je heb ingeticked
    return toBeSearchedArray.filter(game => {
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
            return game
        } 
    })
}

//hij filter de games en als de platform matched met de inputveld van de platform filter, geeft hij de game terug 
export const filteredGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false
        game.platforms.forEach(platform => {
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                found = true
            }
        })
        if(found === true){
            return game
        }
    })
}