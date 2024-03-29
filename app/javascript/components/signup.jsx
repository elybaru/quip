import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext';


const Signup = () => {
    const {user, setUser} = useContext(UserContext)

    const defaultFormData = {
        username: '',
        password: ''
    }
    let navigate = useNavigate()

    const [formData, setFormData] = useState(defaultFormData)

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                setFormData(defaultFormData)
                setUser(data)
                navigate('/')
            })
    }

    return (
        <div className="signup-wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Create an Account</h2>
                </div>
                <br />
                <div>
                <label>
                    Username
                <input
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleFormChange}
                    />
                </label>
                </div>
                <br />
                <div>
                <label>
                    Password
                <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleFormChange}
                    />
                </label>
                </div>
                <br />
                <input type='submit' value='Submit' />
            </form>

        </div>
    )
}
export default Signup
