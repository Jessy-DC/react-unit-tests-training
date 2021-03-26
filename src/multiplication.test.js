//Red -> Green -> Refactoring

import multiplication from "./multiplication";

test('test multiplication of 2 numbers', () => {
    expect(multiplication(2,3)).toBe(6)
    expect(typeof multiplication(2,3)).toBe('number')
    expect(multiplication(2,3)).toEqual(6)
    expect(multiplication("test","string")).toEqual(Error('Number expected as parameter'))
})