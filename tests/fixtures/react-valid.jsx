import { useState } from 'react';

export const Component = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <h1
            className="foo"
            onClick={() => setCount((v) => v + 1)}
        >
            {count}
            <br />
            {children}
        </h1>
    );
}
