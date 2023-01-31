export const fn = (foo) => {
  const bar = { foo }
  return {
    ...bar,
    foo: undefined,
  }
}
