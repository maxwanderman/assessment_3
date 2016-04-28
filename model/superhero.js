var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var superheroSchema = new Schema({
  alias: {type: String, required: true, unique: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  city: {type: String, required: true},
  power_name: {type: String, required: true}
});

var superheroModel = mongoose.model('Superhero', superheroSchema);

module.exports = superheroModel;
