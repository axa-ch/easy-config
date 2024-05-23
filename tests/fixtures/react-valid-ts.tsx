import React, { FC, useState } from 'react';

export const Component: FC = ({ children }: { children: string }) => {
  const [count, setCount] = useState<number>(0);
  return (
    <h1
      className='foo'
      onClick={() => setCount((v) => v + 1)}
    >
      {count}
      <br />
      {children}
    </h1>
  );
};
