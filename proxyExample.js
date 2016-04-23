var fs = require('fs');
var server = require('./slither/servers');
var client = require('./slither/slitherio-client');

var server = { 'host': '206.191.154.45', 'port': '475' };

fs.readFile('proxies.txt', 'utf8', function(error, data)
{
	var proxies = data.split('\r\n');

	for(var i = 0; i < proxies.length; i++)
	{
		var slitherClient = new client('slither.js', server);

		slitherClient.on('snakeJoined', function()
		{
			console.log(slitherClient.nickname, 'has joined the game.');
			//slitherClient.move(100, 100);
			//slitherClient.setAccelerate(true);
		});

		slitherClient.on('foodSpawned', function(spawnedFood)
		{
			//console.log('spawned', spawnedFood);
		});

		slitherClient.on('foodEaten', function(eaterSnake)
		{
			//console.log('eaten', eaterSnake);
		});

		slitherClient.on('snakeAppeared', function(appearedSnake)
		{
			//console.log('appeared', appearedSnake);
		});

		slitherClient.on('snakeMoved', function(movedSnake, movedX, movedY)
		{
			//console.log(movedSnake, movedX, movedY);
		});

		slitherClient.start(proxies[i]);
	}
});
