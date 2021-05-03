import { test } from 'uvu'
import * as assert from 'uvu/assert'

import sortBy from '../src/index.mjs'

test('compare numbers', () => {
  const fn = sortBy(0)

  assert.is(fn([1], [2]), -1)
  assert.is(fn([3], [2]), 1)
  assert.is(fn([1.5], [1.5]), 0)
})

test('compare strings', () => {
  const fn = sortBy(1)

  assert.is(fn([1, 'foo'], [2, 'bar']), 1)
  assert.is(fn([1, 'bar'], [2, 'foo']), -1)
  assert.is(fn([1, 'baz'], [2, 'baz']), 0)
})

test('selector attribute name', () => {
  const fn = sortBy('name')

  assert.is(fn({ id: 'foo', name: 'pix' }, { id: 'bar', name: 'pig' }), 1)
})

test('selector function', () => {
  const fn = sortBy(rec => rec.name)

  assert.is(fn({ id: 'foo', name: 'pix' }, { id: 'bar', name: 'pig' }), 1)
})

test('two level sort', () => {
  const fn = sortBy(0).thenBy(1)

  assert.is(fn([30, 9], [40, 1]), -1)
  assert.is(fn([40, 1], [30, 9]), 1)
  assert.is(fn([40, 2], [40, 3]), -1)
  assert.is(fn([40, 4], [40, 3]), 1)
  assert.is(fn([40, 5], [40, 5]), 0)
})

test('descending', () => {
  const fn = sortBy(0).thenBy(1, true)

  assert.is(fn([30, 9], [40, 1]), -1)
  assert.is(fn([40, 1], [30, 9]), 1)
  assert.is(fn([40, 2], [40, 3]), 1)
  assert.is(fn([40, 4], [40, 3]), -1)
  assert.is(fn([40, 5], [40, 5]), 0)
})

test.run()
