import fs from 'fs';

export const readFile = (fileName: string) => {
  let data: string = "";
  try {
    data = fs.readFileSync(fileName, "utf8");
  } catch (e: any) {
    console.log("Error:", e.stack);
  }
  return data;
};
