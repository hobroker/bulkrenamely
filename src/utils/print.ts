export const print = (message, ...rest) => {
  console.log(`\x1b[32m${message}\x1b[0m`);
  rest.forEach((line) => {
    console.log(line);
  })
};
