import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './UserContext';


const Navbar = () => {

    const {user, setUser} = useContext(UserContext)
    // console.log(user)
    return (
        <div>
         
        <div>
                
                <div className="main-navlinks">
                
                <Link to='/'>Home</Link>
                <span>    </span>
                <Link to='/conversations'>Conversations</Link>
                <span>    </span>
                <Link to='/board'>Quip board</Link>
               
                </div>

    
    
            {/* Banner at top can be signup/login or logout, conditionally render

            Every component checks global state and supply loggedin.
            Loggedin? return xyz
            : navigate to home page  */}


            </div >
        </div >
    )
}

export default Navbar
