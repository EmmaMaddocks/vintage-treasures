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
  {console.log(newUser.user.username)}
  return setMessage(`The user ${newUser.user.username} has been created`)
}).catch((err)=>{
  return setMessage(`${err}, Your username is taken`)
})

    }


      return (
    <>
    <div class="container">
      <h2>Sign up
    </h2>
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
        <button type='submit' class="submit" >Submit Form</button>
        <button type="reset" class="reset">Reset Form</button>
        <div>{message ? <p>{message}</p> : null}</div>
    </form>
    </div>
    </>
)

}

export default SignUp