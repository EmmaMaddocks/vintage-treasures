//title my items
//list of items listed by user
//delete button to remove listed item
//link to list a new item
//link to previously ordered

import { useNavigate } from "react-router-dom";


function Profile({currentUser, setCurrentUser}) {


    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        setCurrentUser(null)
            navigate("/signin");
        
        }

        const orderHistory = (e) => {
            e.preventDefault()
                navigate("/orderhistory");
            
            }
        

return (

    <div className="container">
    <h3>Welcome back {currentUser}!</h3>
    <button onClick={orderHistory} className='blue-btn-lrg'>View Order History</button>
    <button onClick={handleClick} className='blue-btn-lrg'>Sign Out</button>
    </div>
)
   
}

export default Profile