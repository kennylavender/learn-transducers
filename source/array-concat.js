const arrayConcat = (...args) => {
  const [ acc = [], v ] = args;
  switch(args.length) {
    case 0:
    case 1:
      return acc;
    default:
      return acc.concat([v]);
  }
}

export default arrayConcat;