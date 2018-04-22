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
  app.post('/playlist/:id', (req, res) =>{

  })


  app.get('/playlist/:key', (req, res) =>{

  })

}
