var mongoose = require('mongoose');

let hackDef = require('./hack');
let liferHackDef = require('./lifer_hack');
let liferDef = require('./lifer');

var schemas = {
  hack: hackDef,
  liferHack: liferHackDef,
  lifer: liferDef,
};

var config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss"
}

const authz = {
  "module-authz": {"LoginUser": 'CRUD', "Anyone": "CRUD"}
}

module.exports = {schemas, config, authz};
