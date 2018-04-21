module.exports = (app, User) =>{

  //ROUTE FOR VALIDATING USERS
  app.get('/user/:uname/:pword', (req, res) =>{
    User.find({'Uname': req.params.uname}, (err, data) =>{
      if(err) throw err;
      if(data.Pword == req.params.pword)
        res.status(200)
      else {
        res.status(500)
      }
    })
  })

  //ROUTE FOR CREATING NEW USERS
  app.post('/user/:uname/:pword', (req, res) =>{

    //Check count based on user name only allow creation of unique users
    User.find({'Uname': req.params.uname}).count((err, count) =>{
      if(err) throw err
      if(count == 0){
        var newUser = User(req.body).save((err, data) =>{
          if(err) throw err
          res.status(200).json(data)
        })
      }else {
        res.status(500).send("nope")
      }
    })
  })

}
