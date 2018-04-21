module.exports = (app, Song) =>{
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
}
