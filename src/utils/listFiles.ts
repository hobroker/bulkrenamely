import { readdir } from 'fs';

export const listFiles = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readdir('./src', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};
