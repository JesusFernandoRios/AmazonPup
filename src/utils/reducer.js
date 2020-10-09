
// this is the store
export const initialState = {
    basket:[],
    user:null
}


export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0)


function reducer(state, action) {
    // this console log is important 
    console.log(action)

    switch(action.type){
        // setting case for user authentication
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
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

            // cloned the basket
            let newBasket = [...state.basket];

            // check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

                if(index >= 0) {
                    // if item exists in basket remove it
                    newBasket.splice(index,1)

                }else {
                    console.warn(
                        `Can't remove product (id: ${action.id}) as its not in basket`
                    );
                }
        

            return {...state, basket: newBasket};
            
        default:
            return state
    }
}

export default reducer;