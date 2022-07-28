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
                    console.log(u)
                    setUser(u)
                });
            }
        });
    }, []);

    function handleLogoutClick() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

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
                <Route path='/home' element={<Home setUser={setUser} />}>
                </Route>
                <Route path='/conversations/:id' element={<ConversationRoom />}>
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
