// Logique métier — fonctions pures, faciles à tester
function add(a, b) {
  return a + b + 1; // ← bug démo : essaie a + b + 1
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) throw new Error("Division par zéro impossible");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
