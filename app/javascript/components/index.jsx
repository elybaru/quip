import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
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
        <Index />
    </BrowserRouter>,
    document.getElementById('index')
)
