import {Link} from 'react-router-dom'
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

function Nav({cart, currentUser, setCurrentUser}) {

    return (
        <div className="nav-bar">
        <h1>Marketplace</h1>
        <nav>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            <Link to= {currentUser === null ? "/profile" : "/signin"}className='nav-link' currentUser={currentUser} setCurrentUser={setCurrentUser} ><FaUserCircle  size={40}/></Link>
            <Link to="/basket" className='nav-link'><FaShoppingCart className='react-icon' size={40}/></Link>
            <h5>{cart.length}</h5>
        </nav>
        </div>
    )
}

export default Nav