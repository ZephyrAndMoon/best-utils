import isString from '../src/isString'

test('this is string应该是string类型', () => {
  expect(isString('this is string')).toBe(true)
})
