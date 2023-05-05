import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <header>
                    <img src="logo.svg" alt="Puppy Plaza" />
                </header>
            <div className="container">
            
                <div className="auth-form-container">
                    <h1>Login</h1>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
                        <label htmlFor="password">Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="input password" id="password" name="password" />
                        <button type="submit">Log In</button>
                    </form>
                    <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Dont have an account? Register Here.</button>
                </div>
            </div>
            <footer>
            <img src="puppyplaza.svg" alt="Puppy Plaza" />
            <p>Copyright © 2023 Puppy Plaza  | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </footer>
    </div>
    )
}