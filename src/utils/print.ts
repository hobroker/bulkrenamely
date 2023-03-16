import chalk from 'chalk';

export const print = (message: string, ...rest: string[]) => {
  console.log(chalk.yellow(message));
  rest.forEach((line) => {
    console.log(line);
  });
};
