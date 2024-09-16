import { sum } from "../sum"

test("sum function will calculate the sum of two numbers", ()=> {
    
    const result = sum(3,6);
    
    // This line is known as Assertion
    expect(result).toBe(9);
})