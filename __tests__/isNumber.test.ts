import isNumber from '../src/isNumber'

test('123应该是number类型', () => {
  expect(isNumber(123)).toBe(true)
})
