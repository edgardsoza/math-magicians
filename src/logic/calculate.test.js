import calculate from './calculate';

describe ('testing calculate functions', () => {
it ('testing calculate', () => {
    const object = {
      total: 0,
      next: 7,
      operation: '+'
    }
    const newObject = calculate(object, 'AC');
    expect(newObject.total).toBe(0)
});

it ('testing calculate sum', () => {
    const object = {
      total: 3,
      next: 7,
      operation: '+'
    }
    const newObject = calculate(object, '=');
    expect(newObject.total).toBe('10')
});

it ('testing calculate substraction', () => {
    const object = {
      total: 9,
      next: 17,
      operation: '-'
    }
    const newObject = calculate(object, '');
    expect(newObject.total).toBe('-8')
});

it ('testing calculate +/-', () => {
    const object = {
      total: 9,
      next: null,
      operation: '+/-'
    }
    const newObject = calculate(object, '+/-');
    expect(newObject.total).toBe('-9')
});

it ('testing calculate divide', () => {
    const object = {
      total: 72,
      next: 9,
      operation: '÷'
    }
    const newObject = calculate(object, '');
    expect(newObject.total).toBe('8')
});

it ('testing calculate multiply', () => {
    const object = {
      total: 7,
      next: 9,
      operation: 'x'
    }
    const newObject = calculate(object, '');
    expect(newObject.total).toBe('63')
});

it ('testing calculate button 0', () => {
    const object = {
      total: 7,
      next: 0,
      operation: ''
    }
    const newObject = calculate(object, '0');
    expect(newObject.total).toBe(null)
});

it ('testing calculate button 0', () => {
    const object = {
      total: 0,
      next: 10,
      operation: '+'
    }
    const newObject = calculate(object, '+');
    expect(newObject).toStrictEqual({"operation": "+", "total": 0});
});

it ('testing calculate button .', () => {
    const object = {
      total: 5,
      next: '.',
      operation: ''
    }
    const newObject = calculate(object, '');
    expect(newObject).toStrictEqual({'operation': '', "total": '.', 'next': null});
});
});