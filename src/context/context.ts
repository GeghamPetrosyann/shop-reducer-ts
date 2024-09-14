import React from "react";
import { IContext, IState } from "./types";

export const initialState: IState = {
    products: [
        { id: 101, name: "Puma Rs-X1", price: 42, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers" },
        { id: 102, name: "Puma Rs-X2", price: 42, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers" },
        { id: 103, name: "Puma Rs-X3", price: 35, photo: "https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg" },
        { id: 104, name: "adidas Originals Handball", price: 65, photo: "https://images.asos-media.com/products/adidas-originals-handball-spezial-trainers-in-pale-pink-cord/206644199-1-lpink?$n_960w$&wid=952&fit=constrain" },
        { id: 105, name: "New Balance Bbw550", price: 62, photo: "https://images.asos-media.com/products/new-balance-bbw550-trainers-in-white/207076606-1-white?$n_960w$&wid=952&fit=constrain" },
        { id: 106, name: "Puma Rs-X6", price: 82, photo: "https://images.asos-media.com/products/puma-180-sneakers-in-grey-black/207052264-1-stronggraypumablack?$n_960w$&wid=952&fit=constrain" },
        { id: 107, name: "Puma Rs-X7", price: 120, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png" },
        { id: 108, name: "Puma Rs-X8", price: 75, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers" },
        { id: 109, name: "Puma Rs-X8", price: 225, photo: "https://images.footlocker.com/is/image/EBFL2/38989601?wid=250&hei=250" },
    ],

    basket: []
    
}

export const ProductContext = React.createContext<IContext | undefined>(undefined)