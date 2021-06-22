import { trim } from '../src/.helper'

const TEST_STRING = ' best-utils '

test(' best-utils 不应该有空格', () => {
  expect(trim(TEST_STRING)).toBe('best-utils')
})
