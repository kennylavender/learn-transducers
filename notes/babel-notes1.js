// map(f, arr) => arr.map(f);
const arrayConcat = (acc, v) => acc.concat([v]);
const transduce = (xform, reducer, initial, foldable) => foldable.reduce(xform(reducer), initial);
const toArray = (xform, foldable) => transduce(xform, arrayConcat, [], foldable);
const map = xform => step => (a, c, ...rest) => step(a, xform(c), ...rest);
const filter = p => step => (a, c) => p(c) ? step(a, c) : a;

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x);


const add = a => b => a + b;
const double = n => n * 2;
const isEven = n => n % 2 === 0;
const inc = add(1);

const mapInc = map(double);
const mapDouble = map(double);

const arr = [1,2,3];




console.log(
  toArray(mapInc, arr)
);