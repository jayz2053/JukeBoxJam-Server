const mongoose = require('mongoose')

mongoose.connect('mongodb://nodeUser:SE2project!!@localhost:27017/JUKEBOX')

mongoose.connection.once('open', () => {
  console.log("Connection Established")
}).on('error', (error) => {
  console.log('Connection Error')
})
