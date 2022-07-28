import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({ user }) => {
    console.log(user)
    return (
        <div>
            I am the Navbar.


        <div>
                Hello, {user.username}.
                <div>
                <Link to='/home'>Home</Link>
                <Link to='/conversations/'>Conversations</Link>
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
