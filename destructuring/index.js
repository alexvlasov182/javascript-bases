const currency = {
  currencyName: "CHF",
  lotSize: 0.01,
  regulation: "CySec, ASIC",
  spread: "0 Pips",
};

const printCurrencyName = ({ currencyName }) => {
  console.log(currencyName);
};

printCurrencyName(currency);

const { currencyName, lotSize, spread, regulation } = currency;

console.log(spread, regulation);
