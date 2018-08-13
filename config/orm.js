// // Import MySQL connection.
// var connection = require("./connection.js");

// connection.query()

// // Object Relational Mapper (ORM)

// var orm = {
 
//   selectAll: function(whatToSelect, table, orderCol) {
//     var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
//     console.log(queryString);
//     connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   // selectRidden: function(bikeList) {
//   //   var queryString = "SELECT * FROM ?? WHERE beenRidden = 0";
//   //   connection.query(queryString, function(err, result) {
//   //     if (err) throw err;
//   //     console.log(result);
//   //   });
//   // },
//   // selectUnridden: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//   //   var queryString =
//   //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//   //   connection.query(
//   //     queryString,
//   //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//   //     function(err, result) {
//   //       if (err) throw err;
//   //       console.log(result);
//   //     }
//   //   );
//   // }
// };

// module.exports = orm;


// module.exports = orm;
