import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setInfo('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setInfo('forgot password functionality will be implemented soon.')
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <p className="subtitle">Enter your email to reset your password</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        {error && <p className="error-message">{error}</p>}
        {info && <p className="info-message">{info}</p>}

        <button type="submit">Send Reset Link</button>
        <p className="switch-link"><Link to="/">Back to Login</Link></p>
      </form>
    </div>
  );
}

export default ForgotPassword;