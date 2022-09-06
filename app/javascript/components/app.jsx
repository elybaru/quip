import React from 'react'
import './styles.css'
import { Routes, Route, useNavigate, Navigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Signup from './signup'
import Login from './login'
import Home from './home'
import Header from './header'
import Navbar from './navbar'
import MainChatRoom from './mainChatRoom'
import ConversationRoom from './ConversationRoom'
import Conversations from './Conversations'
import ConvoWebSocket from './ConvoWebSocket';
import Board from './Board'
import { UserContext } from './UserContext';

const App = ({ cableApp }) => {
    // LOCAL STATE FOR USER, soon commenting out to try useContext
    // const [user, setUser] = useState(null);
    const [isLoggedin, setIsLoggedIn] = useState(null)
    const [allUsers, setAllUsers] = useState([])
    const [currentConvo, setCurrentConvo] = useState({
        conversation: {},
        users: [],
        messages: []
    })
    // Going to move convoMessage and tellMe to Conversation Room component
    // const [convoMessages, setConvoMessages] = useState([])
    // Moving conversations down to Conversation component so that new conversation rooms can appear when users go back to that page
    // const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState(null)


    // USECONTEXT STATE
    const {user, setUser} = useContext(UserContext)



    let location = useLocation()

    useEffect(() => {
        // console.log("In useEffect")
        // auto-login
        fetch("/api/me").then((r) => {
            if (r.ok) {
                r.json().then((u) => {
                    // console.log(u)
                    setUser(u)
                });
                // console.log(user, "in app useEffect")
            }
        })


        // ConvoWebSocket.received = (data) => setConvoMessages(data.messages)
        // console.log("I AM IN THE USEEFFECT IN CONVERSATIONROOM", convoMessages)
        // fetch("/api/users")
        // 	.then((r) => r.json())
        // 	.then((users) => {
        //         setAllUsers(users)
        //         console.log(users)
        // 	})
    }, []);

    // useEffect(() => {
    //     fetch("/api/conversations").then((r) => {
    //         if (r.ok) {
    //             r.json().then((data) => {
    //                 setConversations(data)
    //                 // console.log("fetched in conversations use effect", data)
    //             });
    //         }
    //     })

    // }, []);


    const handleLogoutClick = () => {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    // const updateAppStateRoom = (newRoom) => {
    // 	setCurrentRoom({
    // 		...currentRoom,
    // 		conversation: newRoom,
    // 		users: newRoom.users,
    // 		messages: newRoom.messages,
    // 	})
    // 	setMessages(newRoom.messages)
    // }

    // console.log("I AM IN APP")

    // Going to move tellMe to conversationRoom component
    // const tellMe = (data) => {
    //     // If you get a new message, coming from broadcast, and I have access to conversations, then 
    //     //
    //     // if (!convoMessages.find(message => message == data.message)) {
    //     // if (data.messages) {
    //         // console.log("Array")
    //         // console.log("TELL ME IS BEING CALLED", data.messages)
    //         // setConvoMessages(data.messages)
    //     // } else {
    //         // console.log("Object")
    //         console.log("TELL ME IS BEING CALLED", data.message)
    //         // console.log("TELL ME IS BEING CALLED with user?", data.username)
    //         setConvoMessages((convoMessages) => [...convoMessages, data.message])
    //     // }
    // }

    const addConvoMessage = (msg) => {
        fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(msg),
        })
    }


    const handleCurrentConvo = (result) => {
        console.log("App handle current conv", result)
        return {
            conversation: result.name,
            users: result.users,
            messages: result.messages,
        }
    }

    // const getConversation = (id) => {
    //     // fetch(`/api/conversations/${id}`, {
    //     //     headers : { 
    //     //         'Content-Type': 'application/json',
    //     //         'Accept': 'application/json'
    //     //        }
    //     // })
    //     // 	.then((res) => res.json())
    //     // 	.then((result) => {
    //     //         debugger
    //     //         console.log("GET CONVERSATION", result)
    //     // 		setCurrentConvo((result) => handleCurrentConvo(result))
    //     //     })

    // }
    // getRoomData(1)

    // setUser={setUser} passed down to Login, Signup
    // login, signup
    // user
    // home, conversations:id, board, navbar

    if (!user) return (

        <div className="wrapper">

            <Header />
            <br />
            <div className="item">

                <div className="login-signup-links">
                    {/* {location.pathname === '/signup' ? <div className='navlinks'><button><Link to='/login'>Login</Link></button></div> : <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>} */}
                    <div className='navlinks'><Link to='/login'>Login</Link></div>
                    <div className='navlinks'><Link to='/signup'>Signup</Link></div>
                </div>
            </div>
            <br />

            <Routes>
                <Route path='/login' element={<Login  />}>
                </Route>
                <Route path='/signup' element={<Signup  />}>
                </Route>
                {/* <Route path='/' element={<Home setUser={setUser} />}>
                </Route> */}
                {/* {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>);

    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <div className="content-header">
                <div>
                    Hello, {user.username}
                </div>
                <div>
                    <button className="button-secondary" onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>

            <div className="content">
                <Routes>
                    <Route exact path='/' element={<Home />}>
                    </Route>
                    <Route exact path='/conversations' element={<Conversations />}>
                    </Route>
                    <Route path='/conversations/:id' element={<ConversationRoom
                        // conversations={conversations}
                        // convoMessages={convoMessages}
                        users={allUsers}
                        cableApp={cableApp}
                        // getConversation={getConversation}
                        user={user}
                        addConvoMessage={addConvoMessage}
                    // setConvoMessages={setConvoMessages}
                    // tellMe={tellMe}
                    />}>
                    </Route>
                    <Route exact path='/board' element={<Board user={user} />}>
                    </Route>
                    {/* <Route path='/login' element={<Login setUser={setUser} />}>
                </Route> */}
                    {/* <Route path='/signup' element={<Signup setUser={setUser} />}>
                </Route> */}
                    {/* <Route path='/chatroom' element={<MainChatRoom user={user} />}> */}
                    {/* </Route> */}
                </Routes>
            </div>

            {/* <ConvoWebSocket 
				cableApp={cableApp}
				// updateApp={updateApp}
                getConversation={getConversation}
                setConvoMessages={setConvoMessages}
                convoMessages={convoMessages}
                tellMe={tellMe}
			/>  */}
        </div>
    )
}

export default App