let express = require('express');
let app = express();
let dbInfo = require('./config/db.js');
let albumArt = require('album-art');
let bodyParser = require('body-parser');
let socket = require('socket.io')

//GET MONGOOSE STUFF IN ORDER
let mongoose = require('mongoose');
let models = require('./models/info.js');
let Song = models.song;
let PlayList = models.playlist;
let User = models.user;

let opts = {
	server: {
		socketOptions: {keepAlive: 1}
	}
};

mongoose.connect(dbInfo.settings, opts)
// Route Handler for serving music
app.use(express.static('Music'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));






//home route
app.get('/', (req, res) => {
	res.json({ message: "Hello World!" });
});


//ALL ROUTING HANDLED IN SEPERATE FILES

require('./routes/playlist.js')(app, PlayList)
require('./routes/songs.js')(app, Song)
require('./routes/users.js')(app, User)
require('./routes/covers.js')(app, albumArt)


let server = app.listen(6024, function(){

	console.log('Example app listening on port 6024!');

	});

// CHAT STUFF
let io = socket(server);

io.on('connection', socket => {
	console.log('made connection')

	socket.on('chat', msg => {
		io.emit('chat', msg)
	})

});
