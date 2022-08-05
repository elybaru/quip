import React from 'react'
import './styles.css'
import { Routes, Route, useNavigate, Navigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './signup'
import Login from './login'
import Home from './home'
import Header from './header'
import Navbar from './navbar'
import MainChatRoom from './mainChatRoom'
import ConversationRoom from './ConversationRoom'
import Conversations from './Conversations'

const App = ({cableApp}) => {
    const [user, setUser] = useState(null);
    const [isLoggedin, setIsLoggedIn] = useState(null)
    const [allUsers, setAllUsers] = useState([])
    const [currentRoom, setCurrentRoom] = useState({
        conversation: {},
        users: [],
        messages: []
    })
    const [messages, setMessages] = useState(null)

    let location = useLocation()

    useEffect(() => {
        console.log("In useEffect")
        // auto-login
        fetch("/api/me").then((r) => {
            if (r.ok) {
                r.json().then((u) => {
                    // console.log(u)
                    setUser(u)
                });
            }
        })
        fetch("/api/users")
			.then((r) => r.json())
			.then((users) => {
                setAllUsers(users)
                console.log(users)
			})
    }, []);

    const handleLogoutClick =()  => {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    const updateAppStateRoom = (newRoom) => {
		setCurrentRoom({
			...currentRoom,
			conversation: newRoom,
			users: newRoom.users,
			messages: newRoom.messages,
		})
		setMessages(newRoom.messages)
	}

    const handleCurrentRoom =(result) => {
		return {
			conversation: result.name,
			users: result.users,
			messages: result.messages,
		}
	}

    const getRoomData =(id) => {
		fetch(`/api/conversations/${id}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
			.then((res) => res.json())
			.then((result) => {
                console.log("GET ROOM DATA", result)
				// setCurrentRoom(() => handleCurrentRoom(result))
            })
            
    }
    // getRoomData(1)

    if (!user) return (

        <div className="wrapper">
            <div className="header">
                I am the app component.
            <Header />
                <div className="item">
                    <h1 className="logo">Quip</h1>
                </div>
                <div className="item">
                    {/* {location.pathname === '/signup' ? <div className='navlinks'><button><Link to='/login'>Login</Link></button></div> : <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>} */}
                    <div className='navlinks'><button><Link to='/login'>Login</Link></button></div>
                    <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>
                </div>
            </div>

            <Routes>
                <Route path='/login' element={<Login setUser={setUser} />}>
                </Route>
                <Route path='/signup' element={<Signup setUser={setUser} />}>
                </Route>
                <Route path='/' element={<Home setUser={setUser} />}>
                </Route>
                {/* {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>);

    return (
        <div className="wrapper">
            <h1>I am in the App component</h1>
            <h2>You are logged in </h2>
            <div>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
            <Navbar user={user} />

            <Routes>
                <Route exact path='/home' element={<Home setUser={setUser} />}>
                </Route>
                <Route exact path='/conversations' element={<Conversations />}>
                </Route>
                <Route path='/conversations/:id' element={<ConversationRoom 
                    users={allUsers}
                    cableApp={cableApp}
                    updateApp={updateAppStateRoom}
                    getRoomData={getRoomData}
                    roomData={currentRoom}
                    user={user}
                    messages={messages}
                    handleMessageUpdate={setMessages}
                />}>
                </Route>
                {/* <Route path='/login' element={<Login setUser={setUser} />}>
                </Route> */}
                {/* <Route path='/signup' element={<Signup setUser={setUser} />}>
                </Route> */}
                {/* <Route path='/chatroom' element={<MainChatRoom user={user} />}> */}
                {/* </Route> */}
            </Routes>
        </div>
    )
}

export default App
