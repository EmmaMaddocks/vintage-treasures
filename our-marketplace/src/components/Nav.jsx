import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/profile" className='nav-link'>Profile</Link>
            <Link to="/basket" className='nav-link'>Basket</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
        </nav>
    )
}

export default Nav