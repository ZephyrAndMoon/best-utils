const { JSDOM } = require('jsdom')

const { window } = new JSDOM(`
  <!DOCTYPE html>
  <body></body>
`)

global.document = window.document
