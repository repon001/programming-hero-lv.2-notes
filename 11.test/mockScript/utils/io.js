import { promises as fs } from "fs";
import path from "path";

export async function saveTokenToFile(token, filePath){
    const storePath = path.join(process.cwd(), "data", filePath);

    return fs.appendFile(storePath, "\n" + token)
}