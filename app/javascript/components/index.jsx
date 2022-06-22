import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from "./app"

const Index = () => {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<h1>This is the Login Route!</h1>}>
            </Route>
            <Route path='/signup' element={<h1>This is the Signup</h1>}>
            </Route>
            <Route path='/' element={<Index />}>
            </Route>
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('index')
)
