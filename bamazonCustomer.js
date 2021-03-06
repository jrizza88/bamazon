// require node packages (mySQL and prompt) in order to complete the assignment
var mysql = require('mysql');
var inquirer = require('inquirer');
// using the color npm for to liven up the terminal for this homework assignment
var colors = require('colors');


// create the connection to the database that I want to use 
var connection = mysql.createConnection({
// must use correct objects which are -  host, user, password, port, database
host: 'localhost',
user: 'root',
password: 'orange88',
port: 3306,
database: 'Bamazon'
});

// used this to show a quick summary array of all that is available
  var catalogue = 
          ["jetblack flatscreen tv", "haxbook notepad",
           "purple tonic keyboard", "red haxbook laptop",
           "art canvas", "paint brush", "colors array set",
           "blue hoodie", "white shorts", "class snapback hat"];

// checking to see if the catalogue gets listed
  console.log("These are the list of all items in the catalogue:".underline, catalogue);

// checks for connection error
connection.connect(function(err){
  if (err) {
    throw err;
  }
// informs user that the connection to the application and database was successful
  console.log('Welcome to Bamazon!'.blue);
});

// ****use queries to test out and run the different required components of the application***** \\

 // variable set to ask questions 

      var customerQuestions = [{
         //Question 1: ID of the product they would like to buy
         name: "id",
        // type: "rawlist",
         message: "which product id number would you like?",
        // choices: catalogue
        },{
       // Questions 2: how many units of the product they would like to buy
        name: "numUnits",
        message: "how many units would you like?"
      }];


            function showCatalogue() {
                          connection.query('SELECT * FROM products', function(err, results) {
                            if (err) {
                              throw err;
                            } else {
                              // the results below are for each product info per row. 
                                results.forEach (function(row) {
                                  console.log(""  + "\nId: ".black + row.id + "\nProduct: ".magenta + row.productName +
                                   "\nDepartment: ".black + row.departmentName + "\nPrice: ".magenta + row.price +
                                   "\nStock: ".black + row.stockQuantity);
                                  console.log("\n------------------------------------");
                            })
                                promptCatalogue();
                          }
                        })
                };



                function promptCatalogue(){
                    inquirer.prompt(customerQuestions).then(function(results){
                                  var customerIdInput = results.id;
                                  var productInventoryInput = results.numUnits;
                          connection.query('SELECT * FROM products WHERE ?',{
                                        id: customerIdInput,
                                }, function (err, rows) {
                                            if (err){
                                              throw err;
                                            } else {
                                  // if not enough QUANTITY console.log ("Insufficient quantity!");
                                      rows.forEach(function(row){
                                        if (row.stockQuantity <= 0){
                                        console.log("Insufficient quantity!".bold.bgRed)
                                      } else {
                                        console.log("There are still enough products!".bold.bgGreen)
                                        var currentInventory = row.stockQuantity;
                                        // checking to see if the inventory and customer input variables work correctly.
                                        console.log("current inventory is:".underline, currentInventory);
                                        console.log("you purchased:".underline, customerIdInput);
                          connection.query('UPDATE products SET ? WHERE ?', [{
                              stockQuantity: currentInventory - productInventoryInput
                              },{
                              id: customerIdInput,
                                }], function(err){
                                  if (err){
                                    throw err
                                  }
                                })
                                //  console logs go here to display results...
                                console.log("\A------------------------------");
                               //Once update goes through, show customer total cost of their purchase
                                console.log(colors.bgYellow("Total cost of purchase: ",row.price * customerIdInput));
                             // update the SQL DB to reflect remaining quantity
                                console.log(colors.bgYellow("current Inventory is now: ", row.stockQuantity - productInventoryInput));
                                console.log("\A------------------------------");
                                console.log("Thank you for shopping at Bamazon!".blue);
                              
                              }   
                       })
                    }
                })
           });
      }


showCatalogue();


// YOU FINISHED!






