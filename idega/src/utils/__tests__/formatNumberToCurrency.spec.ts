import formatNumberToCurrency from '../formatNumberToCurrency';

describe('formatNumberToCurrency()', () => {
  let receivedValue = 300;
  let expectedValue = 'R$\xa0300,00';

  it('formats integer into readable brazilian currency', () => {
    expect(formatNumberToCurrency(receivedValue)).toBe(expectedValue);
  });
});
