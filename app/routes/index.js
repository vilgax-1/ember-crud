import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';


export default class IndexRoute extends Route {
  model(){
    return fetch('https://usuarios.in/api/users')
    .then( resp => resp.json())
    .then( users=> {
        return users;
    });
  }
}
