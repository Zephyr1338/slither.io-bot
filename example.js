var util = require('util');
var server = require('./slither/servers');
var client = require('./slither/slitherio-client');

server.randomServer(function(server)
{
    console.log('retrieved server:', server);

    var slitherClient = new client('slitherino.js', server);

    slitherClient.on('snakeJoined', function()
    {
        console.log(util.format('[%s] has joined the game.', slitherClient.nickname));
    });

    slitherClient.on('foodSpawned', function(spawnedFood)
    {
        console.log(util.format('[%s] has spawned with mass of [%s] at (%s, %s).', spawnedFood.id, spawnedFood.sz, spawnedFood.xx, spawnedFood.yy));
        slitherClient.move(spawnedFood.xx, spawnedFood.yy);
    });

    slitherClient.on('foodEaten', function(eaterSnake, eatenFood)
    {
        console.log(util.format('[%s] has eaten mass of [%s].', eaterSnake.nickname, eaterFood.sz));
	});

    slitherClient.on('snakeAppeared', function(appearedSnake)
    {
        console.log(util.format('[%s] has spawned at (%s, %s).', appearedSnake.nickname, appearedSnake.xx, appearedSnake.yy));

    });

    slitherClient.on('snakeMoved', function(movedSnake)
    {
        console.log(util.format('[%s] has moved to (%s, %s).', movedSnake.nickname, movedSnake.xx, movedSnake.yy));
    });

    slitherClient.on('codeUpdate', function(protocolVersion)
    {
        console.log('The code protocol has been update to ' + protocolVersion);
    });

    slitherClient.start();
});
