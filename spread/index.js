const currency = {
  currencyName: "CHF",
  lotSize: 0.01,
  regulation: "CySec, ASIC",
  spread: "0 Pips",
};

const copiedCurrency = { ...currency };
console.log(copiedCurrency);

const array = ["EUR", "USD", "CHF"];
const copiedArray = ["CAD", ...array];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
