import React, { useState } from 'react';

function ItemForm() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', quantity: 1 });
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'quantity' ? value.replace(/[^0-9]/g, '') : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const name = form.name.trim();
    const description = form.description.trim();
    const quantity = Math.max(1, parseInt(form.quantity || '1', 10));
    if (!name) {
      setError('Please enter a name.');
      return;
    }
    if (!description) {
      setError('Please enter a description.');
      return;
    }
    const newItem = { id: Date.now().toString(), name, description, quantity };
    setItems((prev) => [newItem, ...prev]);
    setForm({ name: '', description: '', quantity: 1 });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h2>Add Items</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 13, color: '#374151' }}>Name</span>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Item name" />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ fontSize: 13, color: '#374151' }}>Description</span>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="What is this item?" rows={3} />
        </label>
        <label style={{ display: 'grid', gap: 6, maxWidth: 200 }}>
          <span style={{ fontSize: 13, color: '#374151' }}>Quantity</span>
          <input name="quantity" inputMode="numeric" value={form.quantity} onChange={handleChange} placeholder="1" />
        </label>
        {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>

      <div style={{ display: 'grid', gap: 8 }}>
        {items.length === 0 ? (
          <div style={{ color: '#6b7280' }}>No items yet. Add your first item above.</div>
        ) : (
          items.map((item) => (
            <div key={item.id} style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 8,
              alignItems: 'center',
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: 12
            }}>
              <div>
                <div style={{ fontWeight: 700 }}>{item.name} <span style={{ color: '#6b7280', fontWeight: 400 }}>× {item.quantity}</span></div>
                <div style={{ color: '#374151' }}>{item.description}</div>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ItemForm;


