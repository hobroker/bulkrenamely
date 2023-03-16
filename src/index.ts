import { readMultiline } from './utils/readMultiline';
import { print } from './utils/print';
import { listFiles } from './utils/listFiles';
import { confirm } from './utils/confirm';

(async () => {
  const original = await listFiles();
  print('Files list:', ...original);
  const changed = await readMultiline(2);

  const rename = await confirm('Rename files?');
  console.log('rename', rename);
})();
