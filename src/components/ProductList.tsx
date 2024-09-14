import { useContext } from "react"
import { ProductContext } from "../context/context"


export default function ProductList() {

    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("there is no context");
    }

    const { state, dispatch } = context

    return <>
        <div className="product-container">
            {state.products.map(product => (
                <div key={product.id} className="product-item">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="product-image"
                    />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price"><strong>{product.price}$</strong></p>
                    <button className="product-button" onClick={() => dispatch({type:"moveToBasket", payload:product.id})}>Move</button>
                </div>
            ))
            
            }
        </div>
    </>
}
