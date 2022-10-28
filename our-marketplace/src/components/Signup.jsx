import { useState } from "react"

function SignUp() {
const [username, setUsername] = useState('')
const [avatar, setAvatar] = useState('')
const [message, setMessage] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://fc-marketplace.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": username,
            "avatar_url": avatar
    
        }),
    }).then((response) => response.json())
.then((newUser) => {
  setUsername('')
  setAvatar('')
  setMessage(`The user ${newUser.user.username} has been created`)
}).catch((err)=>{
  setMessage(`Sorry, that username is already taken. Please try again`)
})

    }


      return (
    <>
    <div class="container">
      <h3 className='sign-up'>Sign up
    </h3>
    <form onSubmit={handleSubmit}>
    <div class="form-input">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}

          />
        </div>
        <div class="form-input">
          <label htmlFor="imageUrl">Avatar Image URL</label>
          <input type="text"
          value={avatar}
          onChange={(e)=> setAvatar(e.target.value)}
           />
        </div>
        <div class='sign-up-btns'>
        <button type='submit' id='blue-btn-lrg' class="submit" >Submit Form</button>
        <button type="reset" id='white-btn-lrg' class="reset">Reset Form</button>
        </div>
  
        
    </form>
    <div class='err'>{message ? <p>{message}</p> : null}</div>
    </div>
    </>
)

}

export default SignUp