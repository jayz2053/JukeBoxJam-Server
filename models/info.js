var mongoose = require('mongoose');

//SCHEMA FOR THE SONG
var songSchema = mongoose.Schema({

	Artist: { type: String, required: true },
	Title: { type: String, required: true },
	Genre: String,
	Year: String,
	Album: { type: String, required: true },

});

var Song = mongoose.model('Song', songSchema);

//SCHEMA FOR A PLAYLIST
var playlistSchema = mongoose.Schema({
	Name: { type: String, required: true },
	AuthUsers: { type: [String], required: true },
	SongList: [songSchema]

});


var PlayList = mongoose.model('PlayList', playlistSchema);

//SCHEMA FOR A USER
var userSchema = mongoose.Schema({
  Uname: { type: String, required: true },
  Pword: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);

var schemas = {'song': Song, 'playlist': PlayList, 'user': User};

module.exports = schemas;
