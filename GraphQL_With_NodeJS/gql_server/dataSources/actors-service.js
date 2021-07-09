//getting data from a rest service -> video 05
const { RESTDataSource } = require('apollo-datasource-rest');

class ActorService extends RESTDataSource{
    
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
      }

      getActors(){
        return this.get('/actors')
        .then((actors) => {
          return actors;
        })
        .catch((error) => console.log(error));
    }
  
    async findActorById(id) {
      return await this.get(`/actors/${id}`);
    }
}

module.exports = ActorService;