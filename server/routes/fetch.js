var router = require('express').Router();
var Superhero = require('../../model/superhero');


router.get('/', function(request, response){
  Superhero.find({}, function(err, superhero){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Sent!');
      response.send(superhero);
      // response.sendStatus(200);
    }
  });
});

module.exports = router;
