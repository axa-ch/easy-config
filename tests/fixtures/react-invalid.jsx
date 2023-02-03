import { useState, FC } from 'react'

export const Component: FC = ({children}) => {
    if (!children) {
        return null
    }

    const [count, setCount] = useState(0)
    return (
        <h1 className="foo" onClick={() => setCount((v) => v + 1)}>
            {count}<br />
            {children}</h1>)
}
