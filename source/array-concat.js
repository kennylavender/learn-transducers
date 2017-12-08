const arrayConcat = (...args) => {
  const [ acc = [], v ] = args;
  switch(args.length) {
    case 2:
      return acc.concat([v]);
    default:
      return acc;
  }
}

export default arrayConcat;