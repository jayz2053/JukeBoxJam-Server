const mocha = require('mocha');
const assert = require('assert');
let info  = require('../models/info.js')
let User = info.user;
let Song = info.song;
let PlayList = info.playList;



// Test for creation and saving of records
describe('Saving Records', (done)=> {

  // Test for saving songs
  it('Saves Song to DB', (done) =>{
    var testSong = new Song({
      Artist: 'Jay-Z',
      Title: 'What More Can I Say?',
      Album: 'The Black Album'
    })

    testSong.save().then(() => {
      assert(testSong.isNew === false)
      done()
    })
  })



  // test for saving users
  it('Saves User to DB', (done) => {
    var testUser = new User({
      Uname: 'jayz2053',
      Pword: 'deezNutz123!'
    })

    testUser.save().then(() => {
      assert(testUser.isNew === false)
      done()
    })

  })

  // test for saving playlists
  it('Saves PlayList to DB', (done) => {

    //create authorized users array
    var auth = [];
    auth.push('jayz2053');
    auth.push('sda165');

    //create an instance of a playlist
    var testPlayList = new PlayList({
      Name: 'Dope Beats',
      AuthUsers: auth
    })

    testPlayList.save().then(() => {
      assert(testPlayList.isNew === false)
      done()
    })
  })

  done()

})
