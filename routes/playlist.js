module.exports = (app, PlayList) =>{

  //ROUTE FOR CREATION OF NEW PLAYLIST
  app.post('/playlist', (req, res) => {

    //CHECK FOR EXSISTENCE
    PlayList.where({ Name : req.body.Name}).count((err, count) => {
        if(err) throw err;
        if(count == 0){
          var newPlayList = PlayList(req.body).save((err, data) =>{
            if(err) throw err
            res.status(200).json(data)
          })
        }else{
          res.status(500).send("nope")
        }
    })
  })

  //ROUTE FOR ADDITION OF SONG TO PLAYLIST
  app.post('/playlist/song/:id', (req, res) =>{

  })

  //Route for addition of user to playlist
  app.post('/playlist/user/:id/:user', (req, res) => {

    var query = req.params.id.replace('-', ' ')

    PlayList.fineOneAndUpdate({Name: query}, {$addToSet : {AuthUsers: req.params.user}
    }).then(
      res.status(200).json({ sucess: true })
    )
  })

  // Route for returning a playlist
  app.get('/playlist/:key', (req, res) =>{
    var query = req.params.key.replace('-', ' ');

    Playlist.findOne({Name: query}, (err, data) => {
      if(err) throw err
      res.json(data)
    })
  })

}
