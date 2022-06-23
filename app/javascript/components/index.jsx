import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from "./app"
import Login from './login'
import Signup from './signup'
import Home from './home'

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
    </BrowserRouter>,
    document.getElementById('index')
)
