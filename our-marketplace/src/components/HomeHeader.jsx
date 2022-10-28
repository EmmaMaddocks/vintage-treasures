import {Link} from 'react-router-dom'

function HomeHeader() {
    return <header>
        <div className="hero-box"> 
        <h2 class='hero-header'>Declutter your home</h2>
        <Link to="/signup"><button className="blue-btn-lrg" >Sign-up</button></Link>
        </div>
    </header>
}

export default HomeHeader