//getting data from a file -> video 04 -> 03:30
const movies = require('../data/movies.json');
const {DataSource} = require('apollo-datasource');
//lodash??? -> video 04 -> 17:30
const _ = require('lodash');

class MovieService extends DataSource{
    constructor(){
        super();
    }

    initialize(config){
    }

    //lodash??? -> video 04 -> 17:30
    getMovies(args){
        return _.filter(movies, args)
    }

    getMovieById(id){
        return movies.filter((movie) =>{
            return movie.id == id;
        })
    }

}

module.exports = MovieService;