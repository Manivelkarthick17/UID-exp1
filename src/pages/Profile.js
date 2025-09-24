import React, { useEffect, useMemo, useState } from 'react';

function Profile({ user, onUpdate }) {
  const [form, setForm] = useState(user || { name: '', email: '', address: '', photo: '' });

  useEffect(() => {
    setForm(user || { name: '', email: '', address: '', photo: '' });
  }, [user]);

  const avatarSrc = useMemo(() => {
    if (form.photo && form.photo.trim()) return form.photo;
    if (form.name && form.name.trim()) {
      const initials = encodeURIComponent(form.name.trim());
      return `https://ui-avatars.com/api/?name=${initials}&background=111827&color=ffffff&size=256`;
    }
    return '/logo192.png';
  }, [form.photo, form.name]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(form);
  }

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Profile</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 16,
        alignItems: 'start',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 16,
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'grid', justifyItems: 'center', gap: 12 }}>
          <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', border: '4px solid #111827' }}>
            <img
              src={avatarSrc}
              alt={form.name || 'User Avatar'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.src = '/logo192.png'; e.currentTarget.onerror = null; }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{form.name || 'Your Name'}</div>
            <div style={{ color: '#6b7280', fontSize: 14 }}>{form.email || 'your@email.com'}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Full Name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Address</span>
            <textarea name="address" value={form.address} onChange={handleChange} placeholder="Street, City, ZIP" rows={3} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, color: '#374151' }}>Photo URL (optional)</span>
            <input name="photo" value={form.photo || ''} onChange={handleChange} placeholder="https://.../avatar.jpg" />
          </label>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 8 }}>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;


