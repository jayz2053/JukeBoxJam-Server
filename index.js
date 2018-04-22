var express = require('express');
var app = express();
var dbInfo = require('./config/db.js');
var albumArt = require('album-art');
var bodyParser = require('body-parser');

//GET MONGOOSE STUFF IN ORDER
var mongoose = require('mongoose');
var models = require('./models/info.js');
var Song = models.song;
var PlayList = models.playlist;
var User = models.User;

var opts = {
	server: {
		socketOptions: {keepAlive: 1}
	}
};


// Route Handler for serving music
app.use(express.static('Music'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(dbInfo.settings, opts)



//home route
app.get('/', (req, res) => {
	res.json({ message: "Hello World!" });
});


//ALL ROUTING HANDLED IN SEPERATE FILES

require('./routes/playlist.js')(app, PlayList)
require('./routes/songs.js')(app, Song)
require('./routes/users.js')(app, User)
require('./routes/covers.js')(app, albumArt)


app.listen(6024, function(){

	console.log('Example app listening on port 6024!');

	});
