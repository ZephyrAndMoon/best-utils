import '../jsdom'
import hasClass from '../src/hasClass'
import addClass from '../src/addClass'

const div = document.createElement('div')
addClass(div, 'block-wrap')

test('该元素添加block-wrap类名', () => {
  expect(hasClass(div, 'block-wrap')).toBe(true)
})
