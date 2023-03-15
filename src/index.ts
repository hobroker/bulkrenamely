import * as fs from 'fs';
import * as path from 'path';

fs.readdirSync(path.join('.')).forEach((file) => {
  console.log(file);
});
