import isEdge from '../src/isEdge'

test('当前不是Edge浏览器环境', () => {
  expect(isEdge()).toBe(false)
})
