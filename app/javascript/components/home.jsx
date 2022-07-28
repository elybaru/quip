import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()

    const handleJoinChat = () => {
        navigate('/chatroom')
    }
    return (
        <div>
            I am the home component.

            Click on the conversations link above to view and participate in conversations. 

            {/* <button onClick={handleJoinChat}>Join Chat</button> */}
            {/* Can check if user and conditionally render things. If loggedin? I am the home page component, else login or signup, so that navbar changes buttons. Make the logic not in the routes but in the components. useContext for loggedIn in global state. */}
        </div>
    )
}

export default Home
