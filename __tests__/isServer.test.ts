import isServer from '../src/isServer'

test('当前不是浏览器环境', () => {
  expect(isServer()).toBe(true)
})
