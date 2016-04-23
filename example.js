
var server = require('./slither/servers');
var client = require('./slither/slitherio-client');

server.randomServer(function(server)
{
    console.log('retreived server:', server);

    var slitherClient = new client('slitherino.js', server);

    slitherClient.on('snakeJoined', function()
    {
        console.log(slitherClient.nickname, 'has joined the game.');
        slitherClient.move(100, 100);
    });

    slitherClient.on('foodSpawned', function(spawnedFood)
    {
        console.log('spawned', spawnedFood);
    });

    slitherClient.on('foodEaten', function(eaterSnake)
    {
        console.log('eaten', eaterSnake);
    });

    slitherClient.on('snakeAppeared', function(appearedSnake)
    {
        //console.log('appeared', appearedSnake);
    });

    slitherClient.on('snakeMoved', function(movedSnake, movedX, movedY)
    {
        console.log(movedSnake, movedX, movedY);
    });

    slitherClient.start();
});
