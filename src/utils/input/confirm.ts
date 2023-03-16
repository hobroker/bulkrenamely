import * as readline from 'readline';

export const confirm = async (question: string): Promise<boolean> => {
  const rl = readline.createInterface(process.stdin, process.stdout);

  return new Promise((resolve) => {
    rl.question(`${question} Y/[N]: `, function (answer) {
      rl.close();
      resolve(answer === 'Y');
    });
  });
};
