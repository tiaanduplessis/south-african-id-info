'use strict'

const validSouthAfricanId = require('valid-south-african-id')

function parseDate (str) {
  return new Date(`${str.substr(0, 2)}-${str.substr(2, 2)}-${str.substr(4, 2)}`)
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
