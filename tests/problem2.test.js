const app = require("../problems/problem2")

describe("Should return type of value", ()=>{
    // test  number
    test("Should return number", () =>{
        const result = app.myFunction(1);
        expect(result).toBe("number");
    });
    // test boolean
    test("Should return boolean", () =>{
        const result = app.myFunction(true);
        expect(result).toBe("boolean");
    });
    // test object
    test("Should retunr object", () =>{
        const result = app.myFunction({});
        expect(result).toBe("object")
    });
    // test string
    test("Should return string", () => {
        const result = app.myFunction("string");
        expect(result).toBe("string")
    });
    // test string in object 
    test("Should return string in object", () =>{
        const result = app.myFunction(['array']);
        expect(result).toBe('object');
    });
    // test which will fail
    test("This one will fail", () =>{
        const result = app.myFunction(1);
        expect(result).toBe('string');
    })
});