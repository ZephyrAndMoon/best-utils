import isIE from '../src/isIE'

test('当前不是IE浏览器环境', () => {
  expect(isIE()).toBe(false)
})
