const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas/ProjectSchema');
const resolvers = require('./src/resolvers/ProjectResolver');

const startServer = async()=>{
    await mongoose.connect('mongodb+srv://<leonelnv>:<123456>@<tu-cluster>.mongodb.net/<firstdb>?retryWrites=true&w=majority&appName=ProjectGraphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const server  = new ApolloServer({typeDefs,resolvers});
    server.listen().then(({url})=>{
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();