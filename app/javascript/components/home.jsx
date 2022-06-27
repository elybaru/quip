import React from 'react'

const Home = () => {
    return (
        <div>
            I am the home component.

            {/* Can check if user and conditionally render things. If loggedin? I am the home page component, else login or signup, so that navbar changes buttons. Make the logic not in the routes but in the components. useContext for loggedIn in global state. */}
        </div>
    )
}

export default Home
