module.exports = (app, albumArt) =>{

app.get('/covers/:artist/:album', (req, res) =>{
  albumArt(req.params.artist, {album : req.params.album, size: 'small'}, (err, path) => {
    if(err) throw err
    res.send(path)
  })
})

}
