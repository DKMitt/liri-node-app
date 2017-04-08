var keys = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");
var Twitter = require('twitter');
var spotify = require("spotify");



  
  // all of the code for my-tweets goes here
        
        var client = new Twitter(keys.twitterKeys);
         
        var params = {screen_name: 'MittTechnology', count: 20};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
             // console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
              console.log('')
              console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            	console.log(' Tweet: ' + tweets[i].text)
              console.log('')
            	console.log(" Tweet Number: " + (i+1))
              console.log('')
            	console.log(' Created: ' + tweets[i].created_at)
              console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
              console.log('')
            }
          }
        });


 
  
  // all of the spotify code will go here

    function spotifySong(song) {
      spotify.search({
        'type': 'track',
        'query': song,
        'limit': 1
      }, function (error, data) {
          if (error) {
            console.log(error + '\n');
          } else {
              console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);
              console.log('Song Name: ' + data.tracks.items[0].name);
              console.log('Preview URL: ' + data.tracks.items[0].preview_url);
              console.log('Album Name: ' + data.tracks.items[0].album.name);              
          }
      });

    }





  
  // all of the movie-this code goes here
	
			var query = "http://www.omdbapi.com/?t=Mr+Nobody&tomatoes=true";
			
			request(query, function(error, response, body) {
				if(!error && response) {

          console.log('')
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
					console.log(" Name: " +JSON.parse(body)["Title"]);
          console.log(" Release Year: " +JSON.parse(body)["Released"]);
          console.log(" IMDB Rating: " +JSON.parse(body)["imdbRating"]);
          console.log(" Country: " +JSON.parse(body)["Country"]);
          console.log(" Language: " +JSON.parse(body)["Language"]);
          console.log(" Plot: " +JSON.parse(body)["Plot"]);
          console.log(" Actors: " +JSON.parse(body)["Actors"]);
          console.log(" Rotten Tomatoes Rating: " +JSON.parse(body)["tomatoRating"]); // used to verify connection
          console.log(" Rotten Tomatoes URL: " +JSON.parse(body)["tomatoURL"]); // used to verify connection
          console.log(" Website URL: " +JSON.parse(body)["Website"]); // not needed for assignment - test
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
          console.log('')
				}
			});



  // all of the do-what-it-says code goes here











