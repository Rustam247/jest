const app = require("../problems/problem4")

describe("Testing random number", () =>{
    const testCase = [
        {
            from: 100,
            to: 110
        },
        {
            from: 200,
            to: 201,
        },
        {
            from: 15,
            to: 155,
        }
    ];
    testCase.forEach(number =>{
        test(
            `From: ${number.from} - to: ${number.to}`,
            () => {
                const result = app.randomNum(number.from, number.to)
                console.log(result);
                expect(result).toBeGreaterThanOrEqual(number.from);
                expect(result).toBeLessThanOrEqual(number.to);
            }
        );
    });
});