const app = require("../problems/problem5")

describe("Shoule NOT return last element", () =>{
    // test .not.toBe
    test("Check if last element not return", ()=>{
        const result = app.myFunc([1, 2, 3, 4, 5], 2);
        expect(result).not.toBe([1, 2, 3]);
    });
})