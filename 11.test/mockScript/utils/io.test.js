import { promises as fs } from "fs";
import { beforeEach, describe, it, expect, vi } from "vitest";
import { saveTokenToFile } from "./io.js";

// import path from "node:path";
/*
describe("saveTokenToFile", () => {
    it("should store the token to the file", async () => {
        const data = "test-token";
        const filePath = `io-test-${randomUUID()}.txt`;
        const storePath = path.join(process.cwd(), "data", filePath);

        try {
            await expect(saveTokenToFile(data, filePath)).resolves.toBeUndefined();   //don't call any internal or external modules in test file
        } finally {
            await fs.rm(storePath, { force: true });
        }
    });

    it("should save token to file and check file content", async () => {
        const data = "test-token";
        const filePath = `io-test-${randomUUID()}.txt`;
        const storePath = path.join(process.cwd(), "data", filePath);

        try {
            await saveTokenToFile(data, filePath);
            const fileContent = await fs.readFile(storePath, "utf-8");

            expect(fileContent).toBe(`\n${data}`);
        } finally {
            await fs.rm(storePath, { force: true });
        }
    });
});
*/

vi.mock("fs");

vi.mock('path')

// good approach
describe("saveTokenToFile", () => {

    const data = "test-token";
    const filePath = "token.txt";

    it("should append the token to the file", async () => {

        await saveTokenToFile(data, filePath);

        expect(fs.appendFile).toHaveBeenCalled();
    })

    it("should save token to file and check file content", async () => {

        fs.appendFile.mockClear();
        await saveTokenToFile(data, filePath);

        expect(fs.appendFile).toHaveBeenCalledWith(
            expect.stringContaining(filePath),
            `\n${data}`,
        );
    });

    it("should send proper argument when saving token to file",async () => {
       await saveTokenToFile(data, filePath);

        expect(fs.appendFile).toBeCalledWith(filePath, expect.stringContaining(data))
    })
});
