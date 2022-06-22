import React from 'react'
import './styles.css'
import { Routes, Route, useNavigate, Navigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './signup'
import Login from './login'
import Home from './home'

const App = () => {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // auto-login
    //     fetch("/me").then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => setUser(user));
    //         }
    //     });
    // }, [user]);

    // if (!user) return (

    //     <div className="wrapper">
    //         <div className="header">
    //             <div className="item">
    //                 <h1 className="logo">Quip</h1>
    //             </div>
    //             {/* <div className="item">
    //           {location.pathname === '/signup' ? <div className='navlinks'><button><Link to='/login'>Login</Link></button></div> : <div className='navlinks'><button><Link to='/signup'>Signup</Link></button></div>}
    //         </div> */}
    //         </div>

    //         <Routes>
    //             <Route path='/login' element={<Login setUser={setUser} />}>
    //             </Route>
    //             <Route path='/signup' element={<Signup setUser={setUser} />}>
    //             </Route>
    //             <Route path="*" element={<Navigate to="/" />} />
    //         </Routes>
    //     </div>);

    return (
        <div className="wrapper">
            <h1>I am in the App component</h1>
            {/* <Routes>
                <Route path='/' element={<Home setUser={setUser} />}>
                </Route>
            </Routes> */}
        </div>
    )
}

export default App
