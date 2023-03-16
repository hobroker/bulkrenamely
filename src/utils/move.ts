import { rename } from 'fs';

export const move = (from: string, to: string): Promise<void> =>
  new Promise((resolve, reject) => {
    rename(from, to, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
