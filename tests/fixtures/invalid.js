export const fn = (foo) => {
    const bar = {'foo':foo}
    delete bar.foo
    return bar
}