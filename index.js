'use strict'

const validSouthAfricanId = require('valid-south-african-id')

function parseDate (str) {
  const d = new Date()
  const divider = (new Date()).getFullYear().toString().substr(2, 2)
  const parsedYear = Number.parseInt(str.substr(0, 2))
  const year = parsedYear > divider ? `19${parsedYear.toString().padStart(2, '0')}` : `20${parsedYear.toString().padStart(2, '0')}`
  const day = Number.parseInt(str.substr(4, 2))
  const month = Number.parseInt(str.substr(2, 2)) - 1

  d.setDate(day)
  d.setMonth(month)
  d.setFullYear(year)
  return d
}

// https://www.westerncape.gov.za/general-publication/decoding-your-south-african-id-number-0
module.exports = function (id) {
  const valid = validSouthAfricanId(id)

  if (!valid) {
    return {valid}
  }

  return {
    valid,
    birthDate: parseDate(id.slice(0, 6)),
    gender: Number.parseInt(id.slice(6, 10)) > 4999 ? 'male' : 'female',
    citizenship: Number.parseInt(id.slice(10, 11)) === 0 ? 'SA citizen' : 'permanent resident'
  }
}
