import chalk from 'chalk';
import { move } from './move';
import { print } from './print';

export const bulkMove = async (
  original: string[],
  changed: string[],
): Promise<void> => {
  let count = 0;

  for (let i = 0; i < original.length; i++) {
    const from = original[i];
    const to = changed[i];

    if (from === to) {
      print(`Skipping ${chalk.blue(from)}...`);
      continue;
    }
    print(`Renaming ${chalk.blue(from)} to ${chalk.magenta(to)}...`);
    await move(from, to);
    count++;
  }

  print(`Renamed ${count} files.`);
};
