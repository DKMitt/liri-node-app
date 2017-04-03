var keys = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");

inquirer.prompt([
    {
    type: "list",
    message: "Whats would you like to do?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "selections"
  }

  ]).then(function(confData){
  	// console.log(JSON.stringify(confData, null, 2));
  	if (confData.selections == "my-tweets") {
  		console.log('working...');
  		// all of the code for my-tweets goes here



  	} else if (confData.selections == "spotify-this-song") {
  		console.log('working2...');
  		// all of the spotify code will go here



  	} else if (confData.selections == "movie-this") {
  		console.log('working3...');
  		// all of the movie-this code goes here
	
			var query = "http://www.omdbapi.com/?t=cinderella";
			
			request(query, function(error, response, body) {
				if(!error && response) {
					console.log("Release Year: " +JSON.parse(body)["Year"]);

				}
			});


  	} else if (confData.selections == "do-what-it-says") {
  		console.log('working4...');
  		// all of the do-what-it-says code goes here


  	} else {
  		console.log('i dont understand...');
  	}
  });
