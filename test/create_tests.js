const mocha = require('mocha');
const assert = require('assert');
const info  = require('../models/info')
let User = info.user;
let Song = info.song;
let PlayList = info.playList;



// DESCRIBE TESTS
describe('Saving Records', ()=> {

  // CREATE TESTS
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

})