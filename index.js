var express = require('express');
var app = express();
var dbInfo = require('./config/db.js');

//GET MONGOOSE STUFF IN ORDER
var mongoose = require('mongoose');
var models = require('./models/info.js');
var Songs = models.song;
var PlayList = models.playlist;
var User = models.playlist;

var opts = {
	server: {
		socketOptions: {keepAlive: 1}
	}
};


// Route Handler for serving music
app.use(express.static('Music'));
app.use(require('body-parser')());


mongoose.connect(dbInfo.settings, opts)



//home route
app.get('/', (req, res) => {
	res.json({ message: "Hello World!" });
});

//SEARCH BY ARTIST
app.get('/artist/:id', (req, res) => {


	var query = req.params.id.replace('-', ' ');

	Song.find({'Artist': query}, (err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

app.get('/artist', (req, res) => {

	Song.find().distinct('Artist', (err, data) => {
		if (err) throw err
		res.json(data);
	});

});

//SEARCH BY SONG TITLE
app.get('/title/:id', (req, res) => {

	var query = req.params.id.replace('-', ' ');

	Song.find({'Title': query}, (err,data) => {
		if (err) throw err;
		res.json(data);
	});
});

//SEARCH BY GENRE
app.get('/genre/:id', (req, res) => {

	var query = req.params.id.replace('-', ' ');

	Song.find({'Genre': query}, (err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

app.get('/genre', (req, res) => {

	Song.find().distinct('Genre', (err, data) => {
		if (err) throw err
		res.json(data);
	});

});

//GIVE A LISTING OF ALL SONGS
app.get('/songs', (req, res) => {

	Song.find({}, (err, data) => {
		if (err) throw err
		res.json(data);
	});
});

//ADD SONG INFO TO THE DATABASE
app.post('/song', (req, res) =>{

	var newSong = Song(req.body).save((err, data) =>{
		if (err) throw err;
		res.json(data);
	});
});

//ALL ROUTING HANDLED IN SEPERATE FILES

require('./routes/playlist.js')(app)
require('./routes/songs.js')(app)
require('./routes/users.js')(app)



app.listen(6024, function(){

	console.log('Example app listening on port 6024!');

	});
