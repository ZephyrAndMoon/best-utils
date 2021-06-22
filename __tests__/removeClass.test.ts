import '../jsdom'
import hasClass from '../src/hasClass'
import removeClass from '../src/removeClass'

const div = document.createElement('div')
div.className = 'block-wrap'
removeClass(div, 'block-wrap')

test('该元素移除block-wrap类名', () => {
  expect(hasClass(div, 'block-wrap')).toBe(false)
})
