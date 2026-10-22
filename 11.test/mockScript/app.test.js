import {describe, it, expect, vi} from "vitest"
import { generateToken } from "./app"

vi.mock("fs");

describe("generateToken", () => {
    it("should execute the logger function if passed", () => {
        const loggerFn = vi.fn()
        generateToken(loggerFn)
        expect(loggerFn).toHaveBeenCalled()
    })
})