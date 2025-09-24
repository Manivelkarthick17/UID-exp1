import React from 'react';

function Footer() {
  return (
    <footer style={{
      padding: '24px 16px',
      borderTop: '1px solid #eee',
      marginTop: 24,
      color: '#666',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 600 }}>Online E‑Mart</div>
      <div style={{ fontSize: 14, color: '#777' }}>
        E-Mart is a online shopping platform that allows you to buy and sell products online
      </div>
      <div style={{ fontSize: 12, color: '#888', marginTop: 6 }}>
        © {new Date().getFullYear()} Online E‑Mart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


