const mongoose = require('mongoose');
const projectSchema =new mongoose.Schema({
id: {type: String, require: true},
title: {type : String, require :true},
fechaIni: {type: String, require: true},
fechaFin: {type: String, require: true},
status: {type: String, default: 'planificado'},
presupuesto: {type: Number, require: true}
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
