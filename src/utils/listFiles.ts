import { readdir } from 'fs';

export const listFiles = (location: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readdir(location, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};
