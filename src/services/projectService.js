const Project = require('../models/ProjectModel');
const { v4: uuidv4 } = require('uuid');

module.exports ={
    getAllProject : async () =>{
        r = await Project.find();

        console.log(r)
        return r
    },
    createProject: async (title,fechaIni,fechaFin,status,presupuesto) =>{
        const id = uuidv4()
        const project = new Project({id,title,fechaIni,fechaFin,status,presupuesto});
        return await project.save();
    },
    updateProject: async (_id,title,fechaIni,fechaFin,status,presupuesto) =>{
        r = await Project.findByIdAndUpdate(_id,{title,fechaIni,fechaFin,status,presupuesto});
        return r
    },
    deleteProject: async (_id) =>{
        r = await Project.findByIdAndDelete(_id);
        console.log(r)
        return r 
    }
}
