import * as readline from 'readline';

export const readMultiline = async (lines: number): Promise<string[]> => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const list: string[] = [];
  rl.prompt();
  rl.on('line', (line) => {
    list.push(line);
    if (list.length === lines) {
      rl.close();
    }
  });

  return new Promise((resolve) => {
    rl.on('close', function (cmd) {
      resolve(list);
    });
  });
};
