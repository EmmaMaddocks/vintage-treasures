import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/basket">Basket</Link>
            <div className='dropdown'>
                <Link to='/categories'>Choose a category</Link>
            </div>
        </nav>
    )
}

export default Nav