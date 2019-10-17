function authReducer(state={}, action) {
    switch(action.type){
        case "SIGNIN": 
            return {
                ...state,
                user: action.payload
            }
        case "SIGNOUT": 
            return {
                ...state,
                user: undefined
            }
        default:
            return state
    }
}

export default authReducer;