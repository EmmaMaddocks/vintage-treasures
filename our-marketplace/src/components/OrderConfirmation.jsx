import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react"

const OrderConfirmation = ({currentUser}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
            navigate("/signin");
        
        }


    const handleContinue = (e) => {
        e.preventDefault()
            navigate("/");
        
        }


if (currentUser) {




    

    return <div className="container"> 
    <h3> Thank you for your order!</h3>
    <button  id='blue-btn-lrg' class="submit" onClick={handleContinue} >Continue Shopping</button>
    </div>
   

} else {
    return <div className="container"> 
    <h3>You must be signed in to make a purchase</h3>
    <button  id='blue-btn-lrg' class="submit" onClick={handleClick} >Sign In</button>
    <Link to="/signup" className='err'>Not a user? Sign up here.</Link>  
    </div>
}


}

export default OrderConfirmation