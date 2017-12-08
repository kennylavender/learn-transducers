import { describe } from 'riteway';
import map from '../map';
import arrayConcat from '../array-concat';

const id = x => x;

const double = x => x * 2;

describe('map(id, arrayConcat)', async should => {
  const { assert } = should();
  const reducer = map(id, arrayConcat);
  assert({
    given: 'no arguments',
    should: 'should return the empty value',
    actual: reducer(),
    expected: []
  });
  assert({
    given: 'an empty array',
    should: 'should return an empty array',
    actual: reducer([]),
    expected: []
  });
  assert({
    given: 'an empty array and a string',
    should: 'should return an array with the string',
    actual: reducer([], 'joe'),
    expected: ['joe']
  });
});

describe('map(double, arrayConcat)', async should => {
  const { assert } = should();
  const reducer = map(double, arrayConcat);
  assert({
    given: 'no arguments',
    should: 'should return the empty value',
    actual: reducer(),
    expected: []
  });
  assert({
    given: 'an empty array',
    should: 'should return an empty array',
    actual: reducer([]),
    expected: []
  });
  assert({
    given: 'an empty array and a string',
    should: 'should return an array with the string',
    actual: reducer([], 2),
    expected: [4]
  });
});