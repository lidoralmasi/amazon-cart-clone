import CartActionTypes from './cartTypes';
import { addItemToCart } from "./cartUtils";


export const initialState = {
    cartItems: [],
    user: null,
    cartTotal: 0
}

// Selector
export const getCartTotal = (cartItems) => {
    let cartTotal = cartItems.reduce(
        (accumalatedPrice, cartItem) =>
            accumalatedPrice + cartItem.price * cartItem.qty,
        0
    )
    return cartTotal;
}

export const cartReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        // CHANGE IT TO CLEAN CODE AND SEPERATE TO INDEPENDENT FILES
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_FROM_CART:
            const index = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cartItems];

            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in cart!`
                )
            }

            return {
                ...state,
                cartItems: newCart
            }
        case CartActionTypes.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: getCartTotal(state.cartItems)
            }

        default:
            return state;
    }
}

