// require node packages (mySQL and prompt) in order to complete the assignment
var mysql = require('mysql');
var prompt = require('prompt');
// using these node packages for better looking colors and organization for the application
var colors = require('colors');
var cliTable = require('cli-table');

// create the connection to the database that I want to use 
var connection = mysql.createConnection({
// must use correct objects which are -  host, user, password, port, database
host: 'localhost',
user: 'root',
password: 'orange88',
port: 3306,
database: 'Bamazon'
});

var catalogue = 
          ["jetblack flatscreen tv", "haxbook notepad",
           "purple tonic keyboard", "red haxbook laptop",
           "art canvas", "paint brush", "colors array set",
           "blue hoodie", "white shorts"];

// checking to see if the catalogue gets listed
  console.log("These are the list of all items in the catalogue: ", catalogue);

// checks for connection error
connection.connect(function(err){
  if (err) {
    throw err;
  }
// informs user that the connection to the application and database was successful
  console.log('Connection to Bamazon successful!');
});

// ****use queries to test out and run the different required components of the application***** \\

 // using prompt here to ask the two questions to the customer. 

 

  var customerQuestions = [{
     //Question 1: ID of the product they would like to buy
     name: "id",
     type: "rawlist",
     message: "which product id number would you like?",
     choices: catalogue
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
                                results.forEach (function(row) {
                                  console.log(""  + "\nId: " + row.id + "\nProduct: " + row.productName +
                                   "\nDepartment: " + row.departmentName + "\nPrice: " + row.price +
                                   "\nStock: " + row.stockQuantity );
                                  console.log("\n------------------------------------");
                            })
                                promptCatalogue();
                          }
                        })
                    };



function promptCatalogue(){
  inquirer.prompt(customerQuestions).then(function (results){
              var productIdInput = results.id;
              var productInventoryInput = results.numUnits;
              console.log(productIdInput, productInventoryInput);
              console.log(productInventoryInput);
            connection.query('SELECT * FROM products WHERE ?',{
                        ID: productIdInput,
            }, function (err, rows) {
              if (err){
                throw err;
              } else {
    // if not enough QUANTITY console.log ("Insufficient quantity!");
                rows.forEach(function(row){
                  if (row.stockQuantity === 0){
                  console.log("Insufficient quantity!")
                } else {
                  console.log("There are still enough products")
                }
                 
              })
            }
          })
        });
      }
showCatalogue();
// Once the customer has placed the order, your application 
//should check if your store has enough of the product to meet the customer's request. (use for loop)

  
    // if there is enough of the product, order needs to be fulfilled here||| 
            //1. update the SQL DB to reflect remaining quantity
            //2. Once update goes through, show customer total cost of their purchase..


// YOU FINISHED!






