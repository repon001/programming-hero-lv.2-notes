import {it, expect} from "vitest"
import { add } from "./math"

it('should return correct sum if an array of number is provided', () => {
    const result = add([1, 2, 3])
    expect(result).toBe(6)
})