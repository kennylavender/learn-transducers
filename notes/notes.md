
// {
//   const a = 5;
//   const b = 5 + 0;
//   console.log(a, b);
// }

// {
//   const a = 5;
//   const b = 0 + 5;
//   console.log(a, b);
// }

// {
//   const x = 3;
//   const y = 6;
//   const z = 10;
//   const a = (x + y) + z;
//   const b = x + (y + z);
//   console.log(a, b);
// }

// // transducer is the concat operation for a monoid
// // all transducers need to supply and empty value

// const concatArray = (...args) => {
//   const [a = [], c] = args;
//   switch(args.length) {
//     case 0:
//       return a;
//     case 1:
//       return a;
//     default:
//       return a.concat([c]);
//   }
// }


// const map = xform => step => (...args) => {
//   const [a = step(), c] = args;
//   switch(args.length) {
//     case 0:
//       return a;
//     case 1:
//       return step(a)
//     default:
//       return step(a, xform(c));
//   }
// }

// // test the reducer
// // call the reducer and get the default value
// // call the reducer with stuff left/right identity 