import { is } from '../src/.helper'

const TEST_STRING = 'best-utils'

const PEOPLE = {
  name: 'Ming',
  age: 26
}

const ADD_FN = () => {
  return 1 + 1
}

test('123应该是number类型', () => {
  expect(is(123, 'Number')).toBe(true)
})

test(`${TEST_STRING}应该是string类型`, () => {
  expect(is(TEST_STRING, 'String')).toBe(true)
})

test(`add_fn应该是funtion类型`, () => {
  expect(is(ADD_FN, 'Function')).toBe(true)
})

test(`people应该是对象类型`, () => {
  expect(is(PEOPLE, 'Object')).toBe(true)
})
