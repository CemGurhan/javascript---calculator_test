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

  test("can subtract from zero",() => {

    expect(subtract(0,5)).toBe(-5);

  });

  test("can subtract two positive numbers",() => {

    expect(subtract(10,5)).toBe(5);

  });

  test("can subtract from a large positive number",() => {

    expect(subtract(Number.MAX_VALUE,5)).toBe(Number.MAX_VALUE - 5);

  });

  test("can subtract two large positive numbers from each other",() => {

    expect(subtract(10_000_000,5_000_000)).toBe(5_000_000);

  });

  test("can subtract two negative numbers",()=>{
     
    expect(subtract(-10,-32)).toBe(22);

  });

  test("can subtract a number from a string",() => {

    expect(subtract("hello",5)).toBe("hello-5");

  });

  test("cannot subtract a string from a string",() => {

    expect(subtract("hello","bye")).toBe("helloNaN");

  });

});

describe('multiply', () => {

  test('can multiply two positive numbers',()=>{

    expect(multiply(3,4)).toBe(12);

  });

  test('can multiply two negative numbers',()=>{

    expect(multiply(-3,-29)).toBe(87);

  });

  test('can multiply a negative number with positive',()=>{

    expect(multiply(-2,237)).toBe(-474);

  })

  test('can multiply decimal numbers',()=>{

    expect(multiply(0.5,0.25)).toBe(0.125);

  })

  test('cannot multiply a string with a positive number',()=>{

    expect(multiply("hello",4)).toBe(NaN);

  });

  test('cannot multiply a string with a string',()=>{

    expect(multiply("hello","bye")).toBe(NaN);

  });

});

describe('divide', () => {

  test('can divide two positive numbers',()=>{

    expect(divide(15,5)).toBe(3);

  });

  test('can divide two negative numbers',()=>{

expect(divide(-3,-1)).toBe(3);

  });

  test('can divide two large numbers',()=>{

expect(divide(100_000_000,200_000_000)).toBe(0.5);

  })

});

describe('modulus', () => {

  test('can modulo 2 positive numbers',()=>{

    expect(modulus(7,3)).toBe(1);

  });

  test('can modulo a number with 0',()=>{

    expect(modulus(0,2)).toBe(0);
  })

});

describe('even', () => {

  test('check if a positive number is even',()=>{
    
    expect(even(32)).toBe(true);

  });

  test('check if a negative number is even',()=>{
    
    expect(even(-12)).toBe(true);

  })

  test('odd number should return false',()=>{
    expect(even(33)).toBe(false);

  })

  test('zero',()=>{
    expect(even(0)).toBe(true);

  })

});

describe('odd', () => {

  test('check if a positive number is odd',()=>{
    
    expect(odd(75)).toBe(true);

  });

  test('check if a negative number is odd',()=>{
    
    expect(odd(-57)).toBe(true);

  })

  test('even number should return false',()=>{
    expect(odd(176)).toBe(false);

  })

  test('zero',()=>{
    expect(odd(0)).toBe(false);

  })

});
