import React from 'react'
import './login.scss'

export default function Login() {
    return (
        <div class="login">
            <div class="container">
                <h1>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required" />
                    <input type="password" name="p" placeholder="Password" required="required" />
                    <button type="submit" class="btn">Login</button>
                </form>

                <h3>Don`t have accound ? <span>Register</span></h3>
            </div>
        </div>
    )
}
