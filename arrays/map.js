// Map method
// 1. creates a new array of items based on the fxn provided
// 2. new array is always the same length as the original
// 3. original array is not manipulated
// Syntax: const new = array.map((item, index) => *criteria*)

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

const currencyName = currencyInfo.map(c => c.currencyName);
console.log(currencyName);

const currencyCountry = currencyInfo.map(c => c.country);
console.log(currencyCountry);

const currencyOrder = currencyInfo.map((c, index) => {
    return {
        currencyName: c.currencyName,
        id: index + 1,
    }
});

console.log(currencyOrder)