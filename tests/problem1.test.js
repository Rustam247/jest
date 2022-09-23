const app = require('../problems/problem1');

describe('Filter our array', () => {
    const testCase = [
        {
            in: [0, 1, 2, 3,4],
            expected: [0,2,4]
        },
        {
            in: [true, false, true, false, true, false],
            expected: [true, true, true]
        }
    ];

    testCase.forEach(array =>{
        test(
            `in: ${array.in}, expected: ${array.expected}`,
            () =>{
                const result = app.filterArray(array.in);
                expect(result).toEqual(array.expected)
            }
        )
    })
});