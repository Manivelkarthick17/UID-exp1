import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const user = { name: name || 'Guest User', email: email || 'guest@example.com' };
    onLogin(user);
  }

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
      borderRadius: 12
    }}>
      <div style={{
        width: '100%',
        maxWidth: 460,
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <div style={{ padding: '18px 18px 0 18px', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: 22 }}>Welcome back</div>
          <div style={{ color: '#6b7280', fontSize: 14 }}>Login to manage your profile</div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, padding: 18 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
          </label>
          <button type="submit" style={{ marginTop: 6 }}>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;


