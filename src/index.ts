import { readMultiline } from './utils/input/readMultiline';
import { print } from './utils/print';
import { listFiles } from './utils/listFiles';
import { confirm } from './utils/input/confirm';

function originalToChangedTable(original: string[], changed: string[]) {
  return original.map((original, idx) => ({ original, changed: changed[idx] }));
}

(async () => {
  const original = await listFiles();
  print('Files list:', ...original);
  const changed = await readMultiline(original.length);

  print('Changes  to be made:');
  console.table(originalToChangedTable(original, changed));

  const rename = await confirm('Rename files?');
  if (!rename) {
    print('Aborting...');
    return;
  }
  print('Renaming...');
})();
