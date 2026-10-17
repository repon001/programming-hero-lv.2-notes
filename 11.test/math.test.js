import {it, expect} from "vitest"
import { add } from "./math"

it('should return correct sum if an array of number is provided', () => {

    // Arrange
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0)

    // Act
    const result = add(numbers)

    // Assert
    expect(result).toBe(expectedResult)
})

it('should return 0 if an empty array is provided', () => {
    expect(add([])).toBe(0)
})

it('should provide NaN if at least one invalid number is provided', () => {
    const numbers = [1, 2, 'a', 4]

    const result = add(numbers)

    expect(result).toBeNaN()
})