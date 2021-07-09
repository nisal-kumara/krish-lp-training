//getting data from a rest service -> video 05
const { RESTDataSource } = require('apollo-datasource-rest');

class DirectorService extends RESTDataSource{
    
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
      }

      getDirectors(){
        return this.get('/directors')
        .then((directors) => {
          return directors;
        })
        .catch((error) => console.log(error));
    }
  
    async findDirectorById(id) {
      return await this.get(`/directors/${id}`);
    }
}

module.exports = DirectorService;