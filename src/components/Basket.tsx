import { useContext } from "react"
import { ProductContext } from "../context/context";
import { IProduct } from "../context/types";

export default function Basket() {

    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("there is no context");
    }

    const { state, dispatch } = context
    const total = state.basket.reduce((accumulator, product) => {
        const price = product.price;
        const count = product.count ?? 1;
        return accumulator + (price * count);
    }, 0)

    return <div className='col-md-5'>
        <p>total</p><strong><p>{total}$</p></strong>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.basket.map((product: IProduct) => <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}$</td>
                        <td>{product.count}</td>
                        <td>{product.count && product.count * product.price}$</td>
                        <td>
                            <button onClick={() => dispatch({ type: "addCount", payload: product.id })}>+</button>
                            <button onClick={() => dispatch({ type: "reduceCount", payload: product.id })}>-</button>
                            <button onClick={() => dispatch({ type: "deleteProduct", payload: product.id })}>x</button>
                        </td>
                    </tr>)
                }
                <tr>
                </tr>
            </tbody>
        </table>
    </div>

}
