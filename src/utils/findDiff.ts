import chalk from 'chalk';
import { Diff, DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL } from '../lib/diff';

const colors = {
  [DIFF_DELETE]: 'red',
  [DIFF_INSERT]: 'green',
  [DIFF_EQUAL]: 'reset',
};

function prettifyDiff(diffs) {
  let result = '';

  for (let x = 0; x < diffs.length; x++) {
    const op = diffs[x][0];
    const text = diffs[x][1];

    result += chalk[colors[op]](text);
  }

  return result;
}

export const findDiff = (str1: string, str2: string) => {
  const instance = new Diff();
  const diff = instance.diff_main(str1, str2);

  return prettifyDiff(diff);
};
