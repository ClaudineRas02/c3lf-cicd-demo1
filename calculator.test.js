const { add, subtract, multiply, divide } = require("./calculator");

test("addition : 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5); // ← ce test détecte le bug dans add()
});
test("soustraction : 10 - 4 = 6", () => {
  expect(subtract(10, 4)).toBe(6);
});
test("multiplication : 3 x 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});
test("division : 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});
test("division par zero -> erreur", () => {
  expect(() => divide(5, 0)).toThrow("Division par zéro impossible");
});
