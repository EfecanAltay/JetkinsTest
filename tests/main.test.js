var { Hello, Calculate } = require("../HelloWorld");

//Hello Test
test('Hello Test', () => {
    expect(Hello().toLowerCase()).toBe("helloworld");
});

//Calculate Test
test('Calculate Test : 2 + 3 = 5', () => {
    expect(Calculate(2,3)).toBe(5);
});