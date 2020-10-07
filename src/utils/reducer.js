
// this is the store
export const initialState = {
    basket:[],
    user:null
}

function reducer(state, action) {
    // this console log is important 
    console.log(action)

    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                // return whatever the state currently was ...state 
                ...state,
                // include whatever we had in the current basket and return the dispatch(action)
                basket:[...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            return {state}
            
        default:
            return state
    }
}

export default reducer;