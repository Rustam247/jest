const app = require("../problems/problem3");

describe("Working with string - simple test", () => {
    // test reverse
    test("Check if string is reverse", () => {
        const result = app.reverseString("hello www");
        expect(result).toBe("www olleh");
    });
})

describe("What if i want to check 3 or more strings", () => {
    const testCase = [
        {
            inString: 'Hello',
            expected: 'olleH'
        },
        {
            inString: 'Taxi',
            expected: 'ixaT'
        },
        {
            inString: 'Apple iphone',
            expected: 'enohpi elppA'
        }
    ];
    testCase.forEach(str =>{
        test(
            `What we have: ${str.inString}. What we get: ${str.expected}`,
            () => {
                const res = app.reverseString(str.inString);
                expect(res).toBe(str.expected);
            }
        );
    })
});