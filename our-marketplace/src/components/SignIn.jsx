import { Link } from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from "react-router-dom";




const SignIn = (props) => {
    const navigate = useNavigate();
const { currentUser, setCurrentUser} = props


const [isLoading, setIsLoading] = useState(true);
const [message, setMessage] = useState('')
const [error, setError] = useState(null)

function checkAuth(currentUser) {
fetch(`https://fc-marketplace.herokuapp.com/api/users/${currentUser}`)
.then((response) => {
    if (!response.ok) {
        setMessage('User not found, please check your spelling and try again')
    } else if (response.ok) {
    setCurrentUser(currentUser)
}})}

const handleSubmit = (e) => {
e.preventDefault()
if (currentUser) {
    navigate("/profile");
}

}

    return <><h1>Please sign in</h1>
    <div className='container'>
       <form onSubmit={handleSubmit}>
        <div class="form-input"> 
                <label htmlFor="currentuser">User Name</label>
                 <input
                    type="text"
                    value={currentUser}
                 onChange={(e)=> setCurrentUser(e.target.value)}
                />
        </div>
        <button type='submit' id='blue-btn-lrg' class="submit" >Sign In</button>
    </form>
        <div>{message ? <p>{message}</p> : null}</div>
    <Link to="/signup" className='err'>Not a user? Sign up here.</Link>  
    </div>
    </>
}


export default SignIn