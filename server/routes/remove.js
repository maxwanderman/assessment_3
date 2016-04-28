var router = require('express').Router();
var Superhero = require('../../model/superhero');


router.delete('/', function(request, response){
  Superhero.remove({}, function(err, superhero){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Removed!');
      response.send(superhero);
      // response.sendStatus(200);
    }
  });
});

module.exports = router;
