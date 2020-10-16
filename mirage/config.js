import { normalizedRequestAttrs } from 'ember-cli-mirage';


export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://usuarios.in/';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing


    // Shorthand cheatsheet:

    this.get('/users', (schema, req) =>{
      return schema.db.users;
    });
    this.post('/users', (schema, req) =>{
      const { requestBody } = req;
      schema.db.users.insert(requestBody);

    });
    this.get('/users/:id', (schema, req)=>{
      const { id } = req.params;
      return schema.db.users.find(id);
    });

    this.put('/users/:id', (schema, req)=>{
      const { id } = req.params;
      const { requestBody } = req;
      let data = {};
      Object.keys(requestBody).forEach( o => {
        if(requestBody[o]){
          data[o] = requestBody[o];
        }
      });
      schema.db.users.update(id, data);
      return [];
    }); // or this.patch

    this.del('/users/:id', (schema, req)=>{
      const { id } = req.params;
      schema.db.users.remove(id);
    });

    // https://www.ember-cli-mirage.com/docs/route-handlers/shorthands

}
