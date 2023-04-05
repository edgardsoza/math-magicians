import operate from './operate';


describe('test operations in calculator', () => {
test ('sum test', () => {
    expect(operate(1,2,'+')).toBe('3')
});

test ('substraction test', () => {
    expect(operate(5,2,'-')).toBe('3')
});

test ('divide test', () => {
    expect(operate(8,2,'÷')).toBe('4')
});

test ('divide test', () => {
    expect(operate(8,2,'x')).toBe('16')
});
});