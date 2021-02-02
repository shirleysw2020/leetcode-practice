// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung',
//   individualSales: 125,
//   leadsInProgress: 48,
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//
var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  leadsInProgress: 10,

  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      leadsInProgress: 22,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          leadsInProgress: 10,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      leadsInProgress: 5,
      manages: []
    }
  ]

};
//
//
// totalSales(salesTeam)
//
// returns 60
//input: object containing an employee who manages a sales team
//output: total sales for the entire team.
var totalSales = function (salesTeam) {
  // All your code in this function body
  // create a var to store sum
  // add the firts employee's individual sales to sum
  var sum = salesTeam.individualSales;
  // look at first employee's manages array
  salesTeam.manages.forEach(el => {
    // call recursion on each employee's el and add the individualSales to sum
    sum += totalSales(el);
  });
  return sum;
  // return sum
};

console.log(totalSales(salesTeam));