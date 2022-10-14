/* eslint-disable no-useless-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import fs from "fs";

export const deleteFile = async(filename: string) => {
    try {
        await fs.promises.stat(filename);
    } catch {
        return;
    }
    await fs.promises.unlink(filename);
}