
// this is the store
export const initialState = {
    basket:[{
        rating:5,
        id:23,
        title:"superlong name to test out the flexibility of the card and see what happens to this really really long text",
        price:300,
        image:"http://pngimg.com/uploads/dog/dog_PNG153.png"
    },
    {
        rating: 4,
        id: 26, 
        title: "superlong name to test out the flexibility of the card and see what happens to this really really long",
        price: 800,
        image:"http://pngimg.com/uploads/dog/dog_PNG50262.png"
    },
],
    user:null
}


export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0)


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