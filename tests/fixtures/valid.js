export const fn = (foo) => {
    const bar = {
        foo,
        est: 'test',
    }
    return {
        ...bar,
        test1: 'test',
    }
}