import { useState, type FC } from 'react';

// @ts-ignore
export const Component: FC = ({ children }) => {
  if (!children) {
    return null;
  }

  const [count, setCount] = useState(0);
  return (
    <h1
      className='foo'
      onClick={() => setCount((v) => v + 1)}
    >
      {count}
      <p>This should fail</p>
      <img
        src={'test.png'}
        alt={'picture of test'}
      />
      <div></div>
      <button>No button type</button>
      <br />
      {children}
    </h1>
  );
};
