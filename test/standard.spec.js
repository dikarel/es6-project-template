/* eslint-env mocha */

import standard from 'mocha-standard'

describe('project', () => {
  it('conforms to standard', standard.files(['src/*.js', 'test/*.js']))
})
