import { useState } from "react";
import { BACKEND_SERVER_URL } from "../Helper";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch(`${BACKEND_SERVER_URL}/register`,
            {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

        if (response.status === 200) {
            alert('Registration Successful');
        } else {
            alert('Registration Failed!');
        }
    }



    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button>Register</button>
        </form>
    );
}