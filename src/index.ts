import { readMultiline } from './utils/input/readMultiline';
import { print } from './utils/print';
import { listFiles } from './utils/listFiles';
import { confirm } from './utils/input/confirm';
import { findDiff } from './utils/findDiff';
import { bulkMove } from './utils/bulkMove';

process.on('SIGINT', () => process.exit());

(async () => {
  const original = await listFiles('.');

  print('Files list:', ...original);
  const changed = await readMultiline(original.length);

  if (changed.length !== original.length) {
    return print('Invalid input. Aborting...');
  }

  print(
    'Changes  to be made:',
    ...original.map((original, idx) => findDiff(original, changed[idx])),
  );

  if (!(await confirm('Rename files?'))) {
    return print('Aborting...');
  }

  print('Renaming...');

  await bulkMove(original, changed);
})();
