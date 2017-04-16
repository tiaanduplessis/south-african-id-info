#!/usr/bin/env node
'use strict'

const southAfricanIdInfo = require('./')
const prettyjson = require('prettyjson')
const arg = process.argv[2]

console.log(prettyjson.render(southAfricanIdInfo(arg)))
