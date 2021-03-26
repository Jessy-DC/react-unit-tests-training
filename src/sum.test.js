//Red -> Green -> Refactoring
import sum from './sum'

test('test sum of two numbers', () => {
    expect(sum(2,3)).toBe(5)
    expect(typeof sum(2,3)).toBe('number')
    expect(sum(2,3)).toEqual(5)
    expect(sum("test","sum")).toEqual(Error('Number expected as parameter'))
})