var server = require('./slither/servers');
var client = require('./slither/slitherio-client');

server.randomServer(function(server)
{
    console.log('retreived server:', server);
    
    var slitherClient = new client('slitherino.js', server);

    slitherClient.on('snakeJoined', function()
    {
        console.log(slitherClient.nickname, 'has joined the game.');
    });

    slitherClient.on('newFood', function(dataBuffer)
    {
        //to be added
    });

    slitherClient.on('snakeAppeared', function(currentSnake)
    {
        console.log(currentSnake);
    });

    slitherClient.start();
});
