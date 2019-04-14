var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hackSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 100},
    description: {type: String, required: true}
  }
);

// Virtual for hack's full name

var hackBrief = "title";
var hackDetail = "title | description";
var hackCreat = "title description";
var hackEdit = "title description";
var hackTextSearch = "title";
var hackIndex = "title";

var views = [hackBrief, hackDetail, hackCreat, hackEdit, hackTextSearch, hackIndex]

//Export model
//module.exports = mongoose.model('Adopter', adopterSchema);


module.exports = {schema: hackSchema, views: views};