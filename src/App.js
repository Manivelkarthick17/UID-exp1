import React, { useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Calculator from './pages/Calculator';
import Counter from './pages/Counter';
import ItemForm from './pages/ItemForm';

function App() {
  const [route, setRoute] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const cartCount = useMemo(() => cartItems.reduce((sum, i) => sum + i.quantity, 0), [cartItems]);

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  function handleNavigate(next) {
    if (next === 'logout') {
      setUser(null);
      setRoute('home');
      return;
    }
    setRoute(next);
  }

  return (
    <div>
      <Header onNavigate={handleNavigate} cartCount={cartCount} user={user} />
      <main style={{ maxWidth: 1024, margin: '16px auto', padding: '0 16px' }}>
        {route === 'home' && (
          <div style={{ display: 'grid', gap: 16 }}>
            <h1 style={{ marginBottom: 0 }}>Welcome to Online E‑Mart</h1>
            <div style={{ color: '#555' }}>Your one‑stop shop for electronics, fashion, home and more.</div>
            <p style={{ margin: 0, color: '#444' }}>
              Explore curated products with transparent pricing. Add items to your cart and review your
              order anytime. Built purely with React components and CSS for a fast and simple experience.
            </p>
            <p style={{ margin: 0, color: '#444' }}>
              Online E‑Mart brings together electronics, fashion, home and kitchen essentials with a focus on
              quality and convenience. Shop confidently with secure checkout and quick delivery.
            </p>
            <ul style={{ marginTop: 0, color: '#444' }}>
              <li>Electronics, fashion, accessories and more</li>
              <li>Lightweight UI with reusable components</li>
              <li>Simple cart management and instant totals</li>
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={() => setRoute('products')}>Shop Now</button>
              <button onClick={() => setRoute('cart')}>View Cart</button>
            </div>
            <div style={{ color: '#666', fontSize: 14, textAlign: 'center', marginTop: 8 }}>
              Daily deals. Secure checkout. Fast delivery.
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 12,
              marginTop: 12
            }}>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 24 }}>⚡</div>
                <div style={{ fontWeight: 700 }}>Fast Shipping</div>
                <div style={{ color: '#6b7280' }}>Get your orders quickly with tracked delivery.</div>
              </div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 24 }}>✅</div>
                <div style={{ fontWeight: 700 }}>Quality Products</div>
                <div style={{ color: '#6b7280' }}>Carefully selected items from trusted brands.</div>
              </div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 24 }}>🔒</div>
                <div style={{ fontWeight: 700 }}>Secure Checkout</div>
                <div style={{ color: '#6b7280' }}>Your data is protected end‑to‑end.</div>
              </div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 24 }}>💬</div>
                <div style={{ fontWeight: 700 }}>Friendly Support</div>
                <div style={{ color: '#6b7280' }}>We’re here to help with any questions.</div>
              </div>
            </div>
            <div style={{ color: '#888', fontSize: 12, textAlign: 'center', borderTop: '1px solid #eee', paddingTop: 12, marginTop: 8 }}>
              Home • © {new Date().getFullYear()} Online E‑Mart
            </div>
          </div>
        )}
        {route === 'products' && (
          <div>
            <h2>Products</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 12
            }}>
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
              ))}
            </div>
          </div>
        )}
        {route === 'cart' && (
          <Cart items={cartItems} onRemove={handleRemoveFromCart} onClear={handleClearCart} />
        )}
        {route === 'login' && (
          <Login onLogin={(u) => { setUser(u); setRoute('profile'); }} />
        )}
        {route === 'profile' && (
          user ? (
            <Profile user={user} onUpdate={(u) => setUser(u)} />
          ) : (
            <div>Please login to view your profile.</div>
          )
        )}
        {route === 'calculator' && (
          <Calculator />
        )}
        {route === 'counter' && (
          <Counter />
        )}
        {route === 'itemform' && (
          <ItemForm />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
