

// src/components/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered with ${email}`);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Register</h3>
      <form onSubmit={handleRegister} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;






