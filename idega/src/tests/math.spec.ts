const add = (x: number, y: number) => x + y;

const subtract = (x: number, y: number) => x - y;

const multiply = (x: number, y: number) => x * y;

describe('simple arithmetic', () => {
  describe('addition', () => {
    test('expect 2 + 3 = 5', () => {
      expect(add(2, 3)).toEqual(5);
    });
  });

  describe('subtract', () => {
    test('expect 5 - 2 = 3', () => {
      expect(subtract(5, 2)).toEqual(3);
    });
  });

  describe('multiply', () => {
    test('expect 2 * 3 = 6', () => {
      expect(multiply(2, 3)).toEqual(6);
    });
  });
});

export {};
