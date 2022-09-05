import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()

    const handleJoinChat = () => {
        navigate('/chatroom')
    }
    return (
        <div className="welcome-message">

            <p>
                Welcome to quip, a simple conversation app.
            </p>
            <br />
            <p>
                Click on the conversations link above to join existing conversations, or to create a new one.
            </p>
            <br />
            <p>
                You can post general notes to other users in the quip board.
            </p>
            <br />
            <p>
                This is a public-facing website, so please be respectful at all times.
            </p>
            <br />
            <p>
                Enjoy!
            </p>


            {/* <button onClick={handleJoinChat}>Join Chat</button> */}
            {/* Can check if user and conditionally render things. If loggedin? I am the home page component, else login or signup, so that navbar changes buttons. Make the logic not in the routes but in the components. useContext for loggedIn in global state. */}
        </div>
    )
}

export default Home
