import './App.css';
import { Routes, Route} from "react-router-dom"
import { useState } from "react"

import Title from './components/Title'
import Items from './components/Items'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Basket from './components/Basket'
import CategoryNav from './components/CategoryNav';
import Categories from './components/Categories';

function App() {
    
  const [newItems, setItems] = useState([])
  const [categoryName, setCategoryName] = useState([])



  return (
    <div className="App">
      <Title />
      <Nav />
      < Routes >
        <Route path='/' element = {<Items setItems={setItems} newItems={newItems}/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/basket' element = {<Basket/>}/>
        <Route path='/categories' element = {<CategoryNav categoryName={categoryName} setCategoryName={setCategoryName}/>}   />
        <Route path='/categories/:category' element = {<Categories categoryName={categoryName} setCategoryName={setCategoryName}/>}   />

      </Routes>      
    </div>
  );
}

export default App;
