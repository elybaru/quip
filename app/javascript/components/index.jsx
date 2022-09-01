import React, {useState, useMemo} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./app"
import Login from './login'
import Signup from './signup'
import Home from './home'
import MessagesBoard from './messages'
import actionCable from "actioncable"
// import {UserContext} from './UserContext'

const cableApp = {}

cableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable")

const Index = () => {
    // const [user, setUser] = useState(null);

    // const value = useMemo(() => ({user, setUser}), [user, setUser]);

    
    return (
        <div>
            {/* <UserContext.Provider value={value}> */}
            <App cableApp={cableApp}/>
            {/* </UserContext.Provider> */}
        </div>
    )
}



ReactDOM.render(
    <BrowserRouter>
        <Index />
        {/* <MessagesBoard /> */}
    </BrowserRouter>,
    document.getElementById('index')
)

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(<MessagesBoard />, document.body.appendChild(document.createElement('div')))
//   })
