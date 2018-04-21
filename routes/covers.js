module.exports = (app, albumArt) =>{

app.get('/covers/:artist/:album', (req, res) =>{

  var artist = req.params.artist.replace('-', ' ')
  var album = req.params.artist.replace('-', ' ')

  albumArt(req.params.artist, {album : req.params.album, size: 'medium'}, (err, path) => {
    if(err) throw err
    res.send(path)
  })
})

}
