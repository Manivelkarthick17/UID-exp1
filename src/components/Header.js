import React from 'react';

function Header({ onNavigate, cartCount, user }) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 10
    }}>
      <div style={{ fontWeight: 700, fontSize: 18 }}>Online E‑Mart</div>
      <nav style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('products')}>Products</button>
        <button onClick={() => onNavigate('cart')}>Cart ({cartCount})</button>
        <button onClick={() => onNavigate('calculator')}>Calculator</button>
        <button onClick={() => onNavigate('counter')}>Counter</button>
        <button onClick={() => onNavigate('itemform')}>Item Form</button>
        {user ? (
          <>
            <button onClick={() => onNavigate('profile')}>Profile</button>
            <button onClick={() => onNavigate('logout')}>Logout</button>
          </>
        ) : (
          <button onClick={() => onNavigate('login')}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;


