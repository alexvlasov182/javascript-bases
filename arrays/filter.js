// Filter method
// 1. Creates a shallow copy of the initial array
// 2. the copy is filtered down based on the criteria passed into the provided
// function
// Syntax: newArray = array.filter(item => *filter criteria*)
const currency = [
    'amer CAD',
    'amer USD',
    'euro CHF',
    'euro EUR',
    'euro GBP'
];

const currencyInfo = [
    {
        currencyName: "USD",
        country: "United States",
        continent: "America",
        id: 1,
    },
    {
        currencyName: "EUR",
        country: "Europe",
        continent: "Europe",
        id: 2,
    },
    {
        currencyName: "CHF",
        country: "Switzerland",
        continent: "Europe",
        id: 3,
    },
    {
        currencyName: "CAD",
        country: "Canada",
        continent: 'America',
        id: 4,
    },
]

const euroCurrency = currency.filter(currency => currency.includes('amer'));
const euroInfo = currencyInfo.filter(currency => currency.continent === 'America');
console.log(euroCurrency);
console.log(euroInfo);