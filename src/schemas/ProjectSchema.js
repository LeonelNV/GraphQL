const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        title: String!
        fechaIni: String!
        fechaFin: String!
        status: String!
        presupuesto: Float!
    }

    type Query {
        project: [Project]!
    }

    type Mutation {
        createProject(title: String!,fechaIni: String!, fechaFin: String!, status: String!, presupuesto: Float!): Project!
        updateProject(_id: ID!, title: String!,fechaIni: String!, fechaFin: String!, status: String!, presupuesto: Float!): Project!
        deleteProject(_id: ID!): Project!
    }
`;

module.exports = typeDefs;