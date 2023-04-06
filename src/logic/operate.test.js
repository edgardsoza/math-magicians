import operate from './operate';

describe('test operations in calculator', () => {
it ('sum test', () => {
    expect(operate(1,2,'+')).toBe('3')
});

it ('substraction test', () => {
    expect(operate(5,2,'-')).toBe('3')
});

it ('divide test', () => {
    expect(operate(8,2,'÷')).toBe('4')
});

it ('divide test zero', () => {
    expect(operate(8,0,'÷')).toBe('Can\'t divide by 0.')
});

it ('multiply test', () => {
    expect(operate(8,2,'x')).toBe('16')
});

it ('percentage test', () => {
    expect(operate(5,7,'%')).toBe('5')
});

it ('percentage test zero', () => {
    expect(operate(5,0,'%')).toBe('Can\'t find modulo as can\'t divide by 0.')
});
});