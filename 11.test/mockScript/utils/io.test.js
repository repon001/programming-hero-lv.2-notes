import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { saveTokenToFile } from "./io.js";

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