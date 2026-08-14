import { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Signup() {
    const [form,setForm] = useState({name:'',email:'',password:''});
    const [error,setError]=useState('');
    const [info,setInfo] = useState('');

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setInfo('');
        if(!form.name || !form.email || !form.password){
            setError('Please fill in all fields');
            return;
        }
        setInfo('Signup will be implemented soon.');
    }

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <p className="subtitle">Sign up for Hertzworkz</p>
                <label htmlFor="name" >Name</label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <label htmlFor="email" >Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                />
                <label htmlFor="password" >Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="*******"
                />
                {error && <p className="error">{error}</p>}
                {info && <p className="info">{info}</p>}
                <button type="submit">Create Account</button>
                <p className="switch-link"><Link to="/">Back to Login</Link>
                </p>
            </form> 
        </div>
    )
}

export default Signup;