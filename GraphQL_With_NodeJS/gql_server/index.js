const {ApolloServer, gql} = require('apollo-server');
// const movieList = require('./data/movies.json');
const movieService = require('./dataSources/file');
const actorService = require('./dataSources/actors-service');

//types in GraphQL -> https://graphql.org/learn/schema/
//filter by evrything -> video 04 -> 15:20
const typeDefs = gql`type Query {
    movies(id: ID,
        title: String,
        year: Int,
        director: String,
        genres: [String]): [Movie],
    findMovieById(id: ID): Movie
    actors: [Actor]
    findActorById(id: ID): Actor
}
type Movie {
    id: ID!,
    title: String,
    year: Int,
    director: String,
    genres: [String],
}
type Actor {
    id: ID!,
    name: String,
    age: Int,
    movieList: [Int]
}`

const dataSources = ()=>({
    movieService: new movieService(),
    actorService: new actorService()
});

const resolvers = {
    Query: {
        movies: (parent, args, {dataSources}, info) => {
            return dataSources.movieService.getMovies(args);
        },
        findMovieById: (parent, {id}, {dataSources}, info) =>{
            return dataSources.movieService.getMovieById(id)[0];
        },
        actors: (parent, args, {dataSources}, info) => {
            return dataSources.actorService.getActors(args);
        },
        findActorById: (parent, {id}, {dataSources}, info) =>{
            return dataSources.actorService.findActorById(id);
        }
    }
}

const gqlServer = new ApolloServer({typeDefs, resolvers, dataSources})

gqlServer.listen({port: process.env.port || 4000})
.then(({url}) => console.log(`GraphQl server started on ${url}`));