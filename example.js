var util = require('util');
var server = require('./slither/servers');
var client = require('./slither/slitherio-client');

server.randomServer(function(server)
{
    console.log('retreived server:', server);

    var slitherClient = new client('slitherino.js', server);

    slitherClient.on('snakeJoined', function()
    {
        console.log(slitherClient.nickname, 'has joined the game.');
        slitherClient.move(0, 0);
    });

    slitherClient.on('foodSpawned', function(spawnedFood)
    {
        console.log(util.format('[%s] has spawned with mass of [%s] at (%s, %s).', spawnedFood.id, spawnedFood.sz, spawnedFood.xx, spawnedFood.yy));
    });

    slitherClient.on('foodEaten', function(eaterSnake, eatenFood)
    {
        console.log(util.format('[%s] has eaten mass of [%s].', eaterSnake.nickname, eaterFood.sz));
    });

    slitherClient.on('snakeAppeared', function(appearedSnake)
    {
        console.log(util.format('[%s] has currently spawned at (%s, %s).', appearedSnake.nickname, appearedSnake.xx, appearedSnake.yy));
    });

    slitherClient.on('snakeMoved', function(movedSnake, movedX, movedY)
    {
        console.log(util.format('[%s] has currently moved to (%s, %s).', movedSnake.nickname, movedX, movedY));
    });

    slitherClient.start();
});
