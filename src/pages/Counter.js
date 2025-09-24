import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);

  function toNumber(input) {
    const n = Number(input);
    return Number.isFinite(n) ? n : 0;
  }

  function increment() {
    setValue((v) => v + toNumber(amount));
  }

  function decrement() {
    setValue((v) => v - toNumber(amount));
  }

  function reset() {
    setValue(0);
  }

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <h2>Counter</h2>
      <div style={{ fontSize: 36, fontWeight: 800 }}>{value}</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span>Step</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: 100 }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;


