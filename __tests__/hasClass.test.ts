import '../jsdom'
import hasClass from '../src/hasClass'

const div = document.createElement('div')
div.className = 'block-wrap block-wrap2'

test('div包含block-wrap类名', () => {
  expect(hasClass(div, 'block-wrap')).toBe(true)
})

test('div不包含block-test-wrap类名', () => {
  expect(hasClass(div, 'block-test-wrap')).toBe(false)
})

// test('div检测class不应该有空格', () => {
//   expect(hasClass(div, ' block-wrap ')).toThrow('className should not contain space.')
// })

const div2 = document.createElement('div')
test('div2没有classList的情况', () => {
  expect(hasClass(div2, 'block-wrap')).toBe(false)
})
