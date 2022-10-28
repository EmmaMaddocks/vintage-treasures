import { Link } from 'react-router-dom'
import { useState } from "react"

function SignIn(props) {

const { currentUser, setCurrentUser} = props


const [isLoading, setIsLoading] = useState(true);
const [message, setMessage] = useState('')

const handleSubmit = (e) => {
e.preventDefault()

isLoading(true)
fetch(`https://fc-marketplace.herokuapp.com/api/users/${currentUser}`)
.then((res) => res.json())
.then(() => {
    setMessage(`Welcome ${currentUser}`)
}).catch((err) => {
    setMessage(`here's your error ${err}`)
})
setIsLoading(false)
}

    return <><h1>Please sign in</h1>
       <form onSubmit={handleSubmit}>
        <div class="form-input">
                <label htmlFor="currentuser">User Name</label>
                 <input
                    type="text"
                    value={currentUser}
                 onChange={(e)=> setCurrentUser(e.target.value)}
                />
        </div>
        <button type='submit' class="submit" >Submit Form</button>
    </form>
    <Link to="/signup" className='nav-link'>Sign-up!</Link>  
    <div>{message ? <p>{message}</p> : null}</div>
    </>
}

export default SignIn