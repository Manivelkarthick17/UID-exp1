import React from 'react';

function Cart({ items, onRemove, onClear }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div style={{ display: 'grid', gap: 8 }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '8px 0' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ color: '#666', fontSize: 14 }}>Qty: {item.quantity}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <button onClick={onClear}>Clear Cart</button>
            <button disabled={items.length === 0}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


