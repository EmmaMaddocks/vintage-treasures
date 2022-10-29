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
import SignIn from './components/SignIn';
import OrderConfirmation from './components/OrderConfirmation';
import PreviousOrders from './components/PreviouslyOrdered';
import FetchOrders from './components/FetchOrders';

function App() {
    
  const [newItems, setItems] = useState([])
  const [categoryName, setCategoryName] = useState([])
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const pathName = window.location.pathname;


  return (
    <div className="App">

      <Nav cart={cart} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      {pathName === '/signup' ?
        <StandardHeader/>  :
      <HomeHeader/> }
      <main>
      < Routes >
        <Route path='/' element = {<Items setItems={setItems} newItems={newItems} setCart={setCart} cart={cart}/>}/>
        <Route path='/profile' element = {<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/basket' element = {<Basket cart={cart} newItems={newItems} setCart={setCart} currentUser={currentUser}/>}/>
        <Route path='/categories' element = {<CategoryNav categoryName={categoryName} setCategoryName={setCategoryName} />}   />
        <Route path='/categories/:category' element = {<Categories categoryName={categoryName} setCategoryName={setCategoryName} setCart={setCart} cart={cart}/>}   />
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/signin' element = {<SignIn currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      <Route path='/orderconfirmation' element = {<OrderConfirmation currentUser={currentUser} setCart={setCart} cart={cart}/>}/>
      <Route path='/orderhistory' element = {<PreviousOrders currentUser={currentUser}/>}/>
      </Routes> 
      </main>
      <Footer />    
    </div>
  );
}

export default App;
