import { describe } from 'riteway';
import arrayConcat from '../array-concat';

describe('arrayConcat', async should => {
  const { assert } = should();
  assert({
    given: 'no arguments',
    should: 'return an array',
    actual: arrayConcat(),
    expected: []
  });
  assert({
    given: 'an empty array',
    should: 'return an equavilant array',
    actual: arrayConcat([]),
    expected: []
  });
  assert({
    given: 'an array with items',
    should: 'return an equavilant array',
    actual: arrayConcat(['one', 'two']),
    expected: ['one', 'two']
  });
  assert({
    given: 'an an array with items and a string',
    should: 'return an equavilant array plus the new value',
    actual: arrayConcat(['one', 'two'], 'three'),
    expected: ['one', 'two', 'three']
  });
});