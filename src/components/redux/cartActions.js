import CartActionTypes from './cartTypes';

export const addItem = item => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
})

