import React, { useState,createContext } from 'react'
import './App.css';
import productitems from './components/back/Data/productitems';
import Header from "./components/front/header/Header";
import Product from './components/front/Products/Products';
import Filter from './components/front/filter/Filter';
import Cart from './components/front/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const cartContext = createContext()
export const filterContext = createContext()

const App = () => {
  const [cart,setCart] = useState([])
  const [filter,setFilter] = useState([])
  console.log(productitems)
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <filterContext.Provider value={{filter,setFilter}}>
        <BrowserRouter>
        <Header len={cart.length}/>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<><Product productitems={productitems}/><Filter/></>}></Route>
          <Route exact path="/cart" element={<Cart cart={cart} productitems={productitems}></Cart>}></Route>
        </Routes>
        </div>
        </BrowserRouter>
      </filterContext.Provider>
      </cartContext.Provider>

  );
}

export default App;
