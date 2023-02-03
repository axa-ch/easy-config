export const fn = (foo: string) => {
  const bar = {
    foo,
    est: 'test',
  }
  return {
    ...bar,
    test1: 'test',
  }
}
