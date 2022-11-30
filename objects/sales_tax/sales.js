const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// first, split the objects by company
const companySalesData = [
  {
    // BC tax rate of 0.12 * (add sales data together)
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    // AB tax rate of 0.05 * (add sales data together)
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    // SK tax rate of 0.10 * (add sales data together)
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateTax(sales, province) {
  let taxRate = salesTaxRates[province];
  // iterate through each province propety in the salesTaxRates array
  for (const province in salesTaxRates) {
    const sales = taxRate.reduce(add, 0);
    function add(accumulator, a) {
      return accumulator += a;
    }
  } return sales
}

console.log(calculateTax("TELUS", "BC"));

// function reducer(accumulator, currentValue, index) {
  // const returns = accumulator + currentValue;

  // return returns;
// }
// array.reduce(reducer);



// console.log(companySalesData);

// sum the ["sales"] values together for each object in the companySalesData array

// const initialValue = 0
// const reducer = (accumulator, item) => {
  // return accumulator + item;
// }
// const salesTotal = numbers.reduce(reducer, initialValue)

function calculateTax(sales, province) {
  let taxRate = salesTaxRates[province];
  //for each sale, accumulate into totalSales and totalTax

}

function calculateSalesTax(salesData, taxRates) {

}

//const results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
