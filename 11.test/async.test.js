import CryptoJS from "crypto-js"
import { describe, expect, it } from "vitest"
import { encryptMessage, encryptMessagePromise } from "./async"

describe("encryptMessage", () => {
    it("encrypts a message that can be decrypted back to the original", async () => {
        const message = "Hello, World!"
        const secretKey = "mySecretKey123"

        const encryptedMessage = await new Promise((resolve) => {
            encryptMessage(message, secretKey, resolve)
        })
        const decryptedMessage = CryptoJS.AES.decrypt(
            encryptedMessage,
            secretKey,
        ).toString(CryptoJS.enc.Utf8)

        expect(encryptedMessage).toBeTruthy()
        expect(decryptedMessage).toBe(message)
    })
})

describe("encryptMessagePromise", () => {
    it("encrypts a message using a promise", async () => {
        const message = "Hello, World!"
        const secretKey = "mySecretKey123"

        const encryptedMessage = await encryptMessagePromise(message, secretKey)

        expect(encryptedMessage).toBeTruthy()
        expect(
            CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8),
        ).toBe(message)
    })
})