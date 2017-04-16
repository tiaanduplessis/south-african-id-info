/* eslint-env jest */
'use strict'

const southAfricanIdInfo = require('./')

test('south-african-id-info', () => {
  expect(southAfricanIdInfo('').valid).toBeFalsy()
  expect(southAfricanIdInfo('9301215029086').valid).toBeTruthy()
})
