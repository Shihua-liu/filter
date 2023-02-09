const filteredGamesReducer = (state, action) => {
    // als de state niks heeft wordt het een lege array lege array
    if(state === undefined){
        return []
    }

    // als de action type FILTEREDGAMES is, dan return hij de action payload 

    if(action.type === "FILTEREDGAMES"){
        return action.payload
    }

    // hij return de nieuwe state, dat is dus leeg op de nieuwe action payload
    return state
}

export default filteredGamesReducer