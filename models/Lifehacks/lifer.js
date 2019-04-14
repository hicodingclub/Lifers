var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var liferSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    last_name: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, maxlength: 100},
  }
);

// Virtual for Student's full name
liferSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

var liferBrief = "first_name last_name";
var liferDetail = "first_name last_name | email";
var liferCreate = "first_name last_name email";
var liferEdit = "first_name last_name email";
var liferTextSearch = "first_name last_name email";
var liferIndex = "email";

var views = [liferBrief, liferDetail, liferCreate, liferEdit, liferTextSearch, liferIndex]

//Export model
//module.exports = mongoose.model('lifer', liferSchema);


module.exports = {schema: liferSchema, views: views};