var router = require('express').Router();
var Superhero = require('../../model/superhero');

router.post('/', function(request, response){

    console.log('Requested with a body of', request.body);

    var data = request.body;

    var newSuperHero = new Superhero({
      alias: data.alias,
      first_name: data.first_name,
      last_name: data.last_name,
      city: data.city,
      power_name: data.power_name
    });


    newSuperHero.save(function(err){
      if(err){
        console.log(err);
        response.sendStatus(500);
      } else {
        console.log('Assignment saved!');
        response.sendStatus(200);
      }
    });
});

module.exports = router;
