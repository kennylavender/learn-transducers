const toArray = (xform, foldable) => transduce(xform, arrayConcat, [], foldable);

export default toArray;