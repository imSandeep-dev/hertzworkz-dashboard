import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';

function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const navigate= useNavigate();
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('');
        if(!email || !password){
            setError('Please fill in all fields');
            return;
        }
        try{
            const response = await fetch('http://localhost:5000/api/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password}),
            })
            const data = await response.json();
            if(data.success){
                navigate('/dashboard');
            }else{
                setError(data.message);
            }
        }catch(err){
            setError('An error occurred. Please try again later.');
        }
    }

    return(
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h1>Hertzworkz</h1>
                <p className="subtitle">Sign in to your account</p>
                <label htmlFor="email" >Email</label>
                <input 
                id="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="Enter your email"
                />
                <label htmlFor="password" >Password</label>
                <input 
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Enter your password"
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Log In</button>
                <p className="switch-link">
                    <Link to="/signup">Don't have an account? Sign up</Link>
                </p>
                <p className="switch-link">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>
            </form>
        </div>
    )
}               

export default Login;