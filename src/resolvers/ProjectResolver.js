const Project = require('../models/ProjectModel');
const projectService = require('../services/projectService');
const resolvers ={
Query: {
project:()=>{
return projectService.getAllProject();
}
},
Mutation: {
    createProject: (_,{title,fechaIni,fechaFin,status,presupuesto})=>{
        return projectService.createProject(title,fechaIni,fechaFin,status,presupuesto);
    },
    updateProject: (_,{id,title,fechaIni,fechaFin,status,presupuesto})=>{
        return projectService.updateProject(id,title,fechaIni,fechaFin,status,presupuesto);
   },
    deleteProject:(_,{id})=>{
         return projectService.deleteProject(id);
   }
}
};

module.exports = resolvers;
