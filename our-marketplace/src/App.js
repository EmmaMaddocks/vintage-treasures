import './App.css';
import { Routes, Route} from "react-router-dom"
import { useState } from "react"

import HomeHeader from './components/HomeHeader'
import Items from './components/Items'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Basket from './components/Basket'
import CategoryNav from './components/CategoryNav';
import Categories from './components/Categories';
import Footer from './components/Footer';
import SignUp from './components/Signup';
import StandardHeader from './components/StandardHeader';

function App() {
    
  const [newItems, setItems] = useState([])
  const [categoryName, setCategoryName] = useState([])
  const [cart, setCart] = useState([]);

  const pathName = window.location.pathname;


  return (
    <div className="App">

      <Nav cart={cart} />
      {pathName === '/signup' ?
        <StandardHeader/>  :
      <HomeHeader/> }
      < Routes >
        <Route path='/' element = {<Items setItems={setItems} newItems={newItems} setCart={setCart} cart={cart}/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/basket' element = {<Basket cart={cart} newItems={newItems} setCart={setCart}/>}/>
        <Route path='/categories' element = {<CategoryNav categoryName={categoryName} setCategoryName={setCategoryName} />}   />
        <Route path='/categories/:category' element = {<Categories categoryName={categoryName} setCategoryName={setCategoryName} setCart={setCart} cart={cart}/>}   />
        <Route path='/signup' element = {<SignUp/>}/>
      </Routes>  
      <Footer />    
    </div>
  );
}

export default App;
