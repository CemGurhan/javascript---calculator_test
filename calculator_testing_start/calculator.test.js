const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 

    

    expect(sum(1_000_000,400_000)).toBe(1_400_000)
    
  });

  test('can add two negative numbers', () => {

    expect(sum(-3,-4)).toBe(-7);
    
  });

  test('can add zero', () => {

    expect(sum(2,0)).toBe(2);
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
