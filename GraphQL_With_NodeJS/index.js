const {ApolloServer, gql} = require('apollo-server');
const movieList = require('./data/movies.json');

//types in GraphQL -> https://graphql.org/learn/schema/
const typeDefs = gql`type Query {
    movies: [Movie]
}
type Movie {
    id: ID!,
    title: String,
    year: Int,
    cast: [String],
    genres: [String]
}`

const resolvers = {
    Query: {
        movies: () =>  movieList
    }
}


const gqlServer = new ApolloServer({typeDefs, resolvers})

gqlServer.listen({port: process.env.port || 4000})
.then(({url}) => console.log(`GraphQl server started on ${url}`));