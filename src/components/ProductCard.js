import React from 'react';

function getCategoryColor(category) {
  switch (category) {
    case 'Electronics':
      return '#2563eb';
    case 'Fashion':
      return '#db2777';
    case 'Home & Kitchen':
      return '#059669';
    case 'Accessories':
      return '#7c3aed';
    default:
      return '#6b7280';
  }
}

function ProductCard({ product, onAdd }) {
  const accent = getCategoryColor(product.category);
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: 10,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      transition: 'transform 120ms ease, box-shadow 120ms ease'
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.10)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)'; }}
    >
      <div style={{ aspectRatio: '3 / 2', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.currentTarget.src = '/logo512.png'; e.currentTarget.onerror = null; }}
        />
      </div>
      <div style={{ padding: 12, display: 'grid', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700 }}>{product.name}</div>
          <span style={{ fontSize: 12, color: '#fff', background: accent, padding: '2px 8px', borderRadius: 999 }}>{product.category}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, color: accent }}>${product.price.toFixed(2)}</div>
          <button onClick={() => onAdd(product)} style={{ background: accent }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


