import React, { useState } from 'react';

const LoginCard = ({ users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const matchedUser = users.find(
      (user)  => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert(`You are logged in, ${matchedUser.name}`);
    } else {
      alert("Please enter correct details");
    }
  };

  return (
    <div style={{
      width: '300px',
      margin: '30px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: 'teal',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginCard;
  