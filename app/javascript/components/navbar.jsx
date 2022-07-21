import React from 'react'

const Navbar = ({ user }) => {
    console.log(user)
    return (
        <div>
            I am the Navbar.


        <div>
                Hello, {user.username}.
    
    
            {/* Banner at top can be signup/login or logout, conditionally render

            Every component checks global state and supply loggedin.
            Loggedin? return xyz
            : navigate to home page  */}


            </div >
        </div >
    )
}

export default Navbar
