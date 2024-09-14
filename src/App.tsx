import './App.css'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import { useReducer } from 'react'
import { reducer } from './context/reducer'
import { ProductContext, initialState } from './context/context'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return <>
  <ProductContext.Provider value={{state, dispatch}}>
    <ProductList/>
    <Basket/>
  </ProductContext.Provider>
  </>
}

export default App
