import React, { useState } from 'react';

export const Counter: React.VFC = () => {
  const [ count, setCount ] = useState<number>(0);

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{count}</strong></p>
      <label>Set value to:</label>
      <input defaultValue={count} 
        onBlur={(event: React.FocusEvent<HTMLInputElement>) => 
          setCount(+event.target.value)} />
      <hr/>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  ); 
}