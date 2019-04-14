var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lifer_hackSchema = new Schema(
  {
    lifer: { type: Schema.Types.ObjectId, ref: 'lifer', required: true }, //reference to the associated lifer
    hack: { type: Schema.Types.ObjectId, ref: 'hack', required: true }, //reference to the associated course instance
  }
);

//to make the association unique
lifer_hackSchema.index({ lifer: 1, hack: 1}, {unique: true}); // schema level

var lifer_hackBrief = "lifer hack";
var lifer_hackDetail = "lifer hack";
var lifer_hackCreat = "lifer hack";
var lifer_hackEdit = "lifer hack";
var lifer_hackTextSearch = "lifer hack";
var lifer_hackIndex = "lifer"; //let's temporarily put any field here since this schema is not referred. 

var views = [lifer_hackBrief, lifer_hackDetail, lifer_hackCreat, 
             lifer_hackEdit, lifer_hackTextSearch, lifer_hackIndex]

//Export model
module.exports = {
    schema: lifer_hackSchema, 
    views: views,
    embeddedViewOnly: true  //only viewable from sub-view
};