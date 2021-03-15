/* eslint-env jest */
'use strict'

const southAfricanIdInfo = require('./')

const ids = [
  {
    value: '9301215029086',
    expectedResult: {
      birthDate: 'Thu Jan 21 1993',
      gender: 'male'
    }
  },
  {
    value: '0107224226186',
    expectedResult: {
      birthDate: 'Sun Jul 22 2001',
      gender: 'female'
    }
  },
  {
    value: '1902264822087',
    expectedResult: {
      birthDate: 'Tue Feb 26 2019',
      gender: 'female'
    }
  }
]

test('south-african-id-info', () => {
  expect(southAfricanIdInfo('').valid).toBeFalsy()
  ids.forEach(({value, expectedResult}) => {
    const result = southAfricanIdInfo(value)
    expect(result.valid).toBeTruthy()
    expect(result.birthDate.toDateString()).toBe(expectedResult.birthDate)
    expect(result.gender).toBe(expectedResult.gender)
  })
})
