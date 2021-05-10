const { solution } = require("./2438-print-star");

const consoleSpy = jest.spyOn(console, "log");

afterEach(() => {
	consoleSpy.mockClear();
})

test("prints the sum of 'a's and 'b's", () => {
  const input = 5;
  const result = `*
**
***
****
*****
`;

  solution(input);
  
  expect(consoleSpy).toBeCalledWith(result);
});

