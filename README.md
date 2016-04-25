<h2>slither.io-bot</h2>
<i>An open source Slither.io client implementation (written in node.js).</i>

<h4>Notice: I have currently began to re-think making this public due to offers of money by people to either help them set it or creat a slither.io bot service</h4>

<h4>Change log</h4>
<ul>
  <li><b>19/04/16:</b> Started programming the client in node.js and started to understand the current game client.</li>
  <li><b>20/04/16:</b> Downloaded the newer game client and started writing 3 new handlers.</li>
  <li><b>21/04/16:</b> Created the current github repository.</li>
  <li><b>21/04/16:</b> Implemented HTTP proxy support.</li>
  <li><b>21/04/16:</b> Update servers to the new slither.io update.</li>
  <li><b>22/04/16:</b> Noticed static variables are traps and are actually being loaded dynamically, adjusted the code to now load the variables dynamically.</li>
  <li><b>23/04/16:</b> Currently handling food spawning and food being eaten.</li>
  <li><b>23/04/16:</b> Created a new function so the snake could be moved around.</li>
  <li><b>23/04/16:</b> Added a new event handlers "snakeMoved", "foodSpawned", "foodEaten", "snakeMoved" and renamed one of them.</li>
  <li><b>23/04/16:</b> Created a new file on the repository showing an example of using proxies(HTTP).</li>
  <li><b>24/04/16:</b> Noticed "snakeAppeared" handler should get the current snake who spawned X and Y .</li>
  <li><b>24/04/16:</b> Getting other snake's X and Y completed reflected in the picture.</li>
</ul>

<h6>Bot is currently being developed on in private.</h6>
<h6>Currently working on: not sure what it will be next now.</h6>

<img src="http://i.imgur.com/k2ygqtJ.png" /><br>
<i>Latest running version of the client.</i><br>

<img src="http://i.imgur.com/p8RPPkD.png" /><br>
<i>Showing other snakes movements instead of (0, 0).</i><br>

<img src="http://i.imgur.com/jcxth8u.png" /><br>
<i>The bot current can load the snakes which "appear" around it.</i><br>

<img src="http://i.imgur.com/xbXGbqW.png" /><br>
<i>Found my bot after a little search time, changed the name to make it easier to find :).</i><br>

<img src="http://i.imgur.com/tQtGbrv.png" /><br>
<i>Using proxies to create loads of bots on a single server.</i><br>
