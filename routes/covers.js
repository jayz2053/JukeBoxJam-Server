module.exports = (app, albumArt) =>{

app.get('/covers/:artist/:album', (req, res) =>{

  var qArtist = req.params.artist.replace('-', ' ')
  var qAlbum = req.params.artist.replace('-', ' ')

  //console.log(artist album)
  albumArt(qArtist, {album : qAlbum, size: 'large'}, (err, path) => {
    if(err) throw err
    res.send(path)
  })
})

}
