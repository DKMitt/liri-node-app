var keys = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");
var Twitter = require('twitter');

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
  		console.log('working... my-tweets');
  		// all of the code for my-tweets goes here
        var client = new Twitter(keys.twitterKeys);
         
        var params = {screen_name: 'MittTechnology', count: 20};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            // console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
            	console.log(tweets[i].text)
            	console.log(i+1)
            	console.log(tweets[i].created_at)
            }
          }
        });


  	} else if (confData.selections == "spotify-this-song") {
  		console.log('working... spotify-this-song');
  		// all of the spotify code will go here



  	} else if (confData.selections == "movie-this") {
  		console.log('working... movie-this');
  		// all of the movie-this code goes here
	
			var query = "http://www.omdbapi.com/?t=cinderella";
			
			request(query, function(error, response, body) {
				if(!error && response) {
					console.log("Release Year: " +JSON.parse(body)["Year"]);

				}
			});


  	} else if (confData.selections == "do-what-it-says") {
  		console.log('working... do-what-it-says');
  		// all of the do-what-it-says code goes here


  	} else {
  		console.log('i dont understand...');
  	}
  });
