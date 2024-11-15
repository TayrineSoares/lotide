// Complete the object being exported by referencing all of the utility functions that our Lotide library offers, instead of just the three that we've listed so far.



const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual         = require('./assertEqual');
const assertObjectsEqual  = require('./assertObjectsEqual');
const countLetters        = require('./countLetters');
const countOnly           = require('./countOnly');
const eqArrays            = require('./eqArrays');
const eqObjects           = require('./eqObjects');
const findKey             = require('./findKey');
const findKeyByValue      = require('./findKeyByValue');
const flatten             = require('./flatten');
const head                = require('./head');
const letterPositions     = require('./letterPositions');
const map                 = require('./map');
const middle              = require('./middle');
const min                 = require('./min');
const tail                = require('./tail');
const takeUntil           = require('./takeUntil');
const without             = require('./without');


module.exports = {

  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters:       countLetters,
  countOnly:          countOnly, 
  eqArrays:           eqArrays,
  eqObjects:          eqObjects,
  findKey:            findKey,
  findKeyByValue:     findKeyByValue,
  flatten:            flatten,
  head:               head,
  letterPositions:    letterPositions,
  map:                map,
  middle:             middle,
  min:                min,
  tail:               tail,
  takeUntil:          takeUntil,
  without:            without
};

