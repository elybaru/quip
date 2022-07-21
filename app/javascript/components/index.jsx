import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./app"
import Login from './login'
import Signup from './signup'
import Home from './home'
import MessagesBoard from './messages'

const Index = () => {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <Index />
        <MessagesBoard />
    </BrowserRouter>,
    document.getElementById('index')
)

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(<MessagesBoard />, document.body.appendChild(document.createElement('div')))
//   })
