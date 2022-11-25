const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


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

// function calculateTax(sales, taxRate) {
  // console.log
// }

// we need to add all the companySalesData.sales values together
const salesTotals = Object.values(companySalesData)
const sum = salesTotals.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(sum);


// const calculateSalesTax = function(salesData, taxRates) {}


