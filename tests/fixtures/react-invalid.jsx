import { useState, FC } from 'react'

export const Component = ({children}) => {
    if (!children) {
        return null
    }

    const [count, setCount] = useState<any>(0)
    return (
        <h1 className="foo" onClick={() => setCount((v) => v + 1)}>
            {count}<br />
            {children}</h1>)
}
