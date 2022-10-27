import './App.css';
import { Routes, Route} from "react-router-dom"

import Title from './components/Title'
import Items from './components/Items'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Basket from './components/Basket'
import Electronics from './components/Electronics';

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      < Routes >
        <Route path='/' element = {<Items/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/basket' element = {<Basket/>}/>
        <Route path='/electronics' element = {<Electronics/>}/>
      </Routes>      
    </div>
  );
}

export default App;
