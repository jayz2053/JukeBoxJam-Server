var mongoose = require('mongoose');

//SCHEMA FOR THE SONG
var songSchema = mongoose.Schema({

	Artist: String,
	Title: String,
	Genre: String,
	Year: String,
	Album: String,

});

var Song = mongoose.model('Song', songSchema);

//SCHEMA FOR A PLAYLIST
var playlistSchema = mongoose.Schema({
	Name: String,
	Users: [String],
	SongList: [songSchema]

});


var PlayList = mongoose.model('PlayList', playlistSchema);

//SCHEMA FOR A USER
var userSchema = mongoose.Schema({
  Uname: String,
  Pword: String
});

var User = mongoose.model('User', userSchema);

var schemas = {'song': Song, 'playlist': PlayList, 'user': User};

module.exports = schemas;
