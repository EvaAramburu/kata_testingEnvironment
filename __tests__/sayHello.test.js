import  sayHello from "../src/sayHello.js"

test("should return 'Hello World'", () => {
    let result = sayHello();
    expect(result).toBe("Hello world");
})

// expect : debe contener el resultado de la función sayHello

// para ello recogemos el resultado en una variable dentro de la arrow function 