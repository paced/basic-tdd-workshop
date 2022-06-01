import fs from "fs/promises";

/**
 * Open a file gracefully and return it if possible.
 *
 * If the file read was unsuccessful, the result will be `undefined`.
 *
 * @param {string} filename the filename
 * @returns {Promise<string | undefined>} the file output
 */
export const openGracefully = async (filename: string): Promise<string | undefined> => {
  return fs.access(filename).then(
    () => fs.readFile(
      filename, {encoding: "utf-8"},
    ).catch(
      () => {
        console.error(`Reading file failed: [${filename}].`);

        return undefined;
      }
    ),
  ).catch(
    () => {
      console.error(`File could not be found: [${filename}].`);

      return undefined;
    }
  );
};
