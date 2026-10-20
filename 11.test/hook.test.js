import { it, expect, describe, beforeEach } from 'vitest'
import { User } from './hook'

describe("User class", () => {
    const testEmail = "ZM5lX@example.com"
    let user 

    beforeEach(() => {
        console.log("before each test")
        user = new User(testEmail)
    })

    it("should create a user with the given email", () => {

        expect(user.email).toBeDefined(testEmail)
    })

    it("should update the user's email ", () => {
        const newUserEmail = "newemail@example.com"

        user.updateEmail(newUserEmail)

        expect(user.email).toBe(newUserEmail)
    })

    it("should store the proved email", () => {
        expect(user.email).toBe(testEmail)
    })

    it("should clear the user's email", () => {
        user.clearEmail()

        expect(user.email).toBeNull()
    })
})