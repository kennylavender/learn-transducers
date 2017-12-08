import { curry} from 'ramda';

const map = (xform, step) => (...args) => {
  const [a = step(), c] = args;
  switch(args.length) {
    case 0:
      return a;
    case 1:
      return a; // this should be step(a), need to come up with a test, arrayConcat does not require
    default:
      return step(a, xform(c));
  }
};

export default curry(map);