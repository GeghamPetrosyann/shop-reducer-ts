
import { IAction, IState } from "./types";

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {

        case "moveToBasket":
            const productToMove = state.products.find(item => item.id === action.payload)
            const found = state.basket.find(product => product.id === action.payload)

            if (found) {
                return {
                    ...state,
                    basket: state.basket.map((prodct) =>
                        prodct.id === action.payload
                            ? { ...prodct, count: (prodct.count || 1) + 1 }
                            : prodct
                    )
                }
            }
            if (productToMove) {
                productToMove.count = 1
                return {
                    ...state,
                    basket: [...state.basket, productToMove]
                }
            }

        case "addCount":
            return {
                ...state,
                basket: state.basket.map((prodct) =>
                    prodct.id === action.payload
                        ? { ...prodct, count: (prodct.count || 1) + 1 }
                        : prodct
                )
            }

        case "reduceCount":
            return {
                ...state,
                basket: state.basket.map((prodct) => {

                    if (prodct.count && prodct.count > 1) {
                        return prodct.id === action.payload
                            ? { ...prodct, count: (prodct.count || 1) - 1 }
                            : prodct
                    } else {
                        return prodct
                    }
                }
                )
            }

        case "deleteProduct": 
        return {
            ...state,
            basket: state.basket.filter(product => product.id != action.payload)
        }




        default:
            return state
    }
}