const {ApolloServer, gql} = require('apollo-server');
// const movieList = require('./data/movies.json');
const movieService = require('./dataSources/file');
const directorService = require('./dataSources/director-service');

//types in GraphQL -> https://graphql.org/learn/schema/
//filter by evrything -> video 04 -> 15:20
const typeDefs = gql`type Query {
    movies(id: ID,
        title: String,
        year: Int,
        cast: [String],
        genres: [String]): [Movie],
    findMovieById(id: ID): Movie
    directors: [Director]
    findDirectorById(id: ID): Director
}
type Movie {
    id: ID!,
    title: String,
    year: Int,
    cast: [String],
    genres: [String]
}
type Director {
    id: ID!,
    name: String,
    age: Int,
    movieList: [String]
}`

const dataSources = ()=>({
    movieService: new movieService(),
    directorService: new directorService()
});

const resolvers = {
    Query: {
        movies: (parent, args, {dataSources}, info) => {
            return dataSources.movieService.getMovies(args);
        },
        findMovieById: (parent, {id}, {dataSources}, info) =>{
            return dataSources.movieService.getMovieById(id)[0];
        },
        directors: (parent, args, {dataSources}, info) => {
            return dataSources.directorService.getDirectors(args);
        },
        findDirectorById: (parent, {id}, {dataSources}, info) =>{
            return dataSources.directorService.findDirectorById(id);
        }
    }
}

const gqlServer = new ApolloServer({typeDefs, resolvers, dataSources})

gqlServer.listen({port: process.env.port || 4000})
.then(({url}) => console.log(`GraphQl server started on ${url}`));