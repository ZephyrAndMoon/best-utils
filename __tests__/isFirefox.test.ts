import isFirefox from '../src/isFirefox'

test('当前不是Firefox浏览器环境', () => {
  expect(isFirefox()).toBe(false)
})
