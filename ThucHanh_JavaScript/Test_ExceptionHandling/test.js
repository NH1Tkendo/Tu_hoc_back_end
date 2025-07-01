// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error("Parameter is not a number!");
//     }
// }

// try {
//     getRectArea(3, "A");
// } catch (e) {
//     console.error(e);
//     // Expected output: Error: Parameter is not a number!
// }
//=======================================================
// function readFilePromise(path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// try {
//     const data = await readFilePromise("foo.txt");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

//=======================================================
// try {
//     willGiveErrorSometime();
// } catch (error) {
//     if (error instanceof RangeError) {
//         rangeErrorHandler(error);
//     } else if (error instanceof ReferenceError) {
//         referenceErrorHandle(error);
//     } else {
//         errorHandler(error);
//     }
// }

//===================================================
// try {
//     throw new Error("Whoops!");
// } catch (e) {
//     console.error(`${e.name}: ${e.message}`);
// }
//   let a = new Error();
// a.cause
//===================================================
// try {
//     throw new Error("Whoops!");
// } catch (e) {
//     console.error(`${e.name}: ${e.message}`);
// }
//====================================================
// try {
//     foo.bar();
// } catch (e) {
//     if (e instanceof EvalError) {
//         console.error(`${e.name}: ${e.message}`);
//     } else if (e instanceof RangeError) {
//         console.error(`${e.name}: ${e.message}`);
//     }
//     // etc.
//     else {
//         // If none of our cases matched leave the Error unhandled
//         throw e;
//     }
// }


  
  