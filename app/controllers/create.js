import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
  url = 'https://reqres.in/api/users/';

  @action
    createUser(id){
      const body = { name: this.get('Name'), job: this.get('Job') }
      fetch(this.url, {
        method: 'POST',
        body: body
      }).then((resp) => resp.json())
      .then((data)=> {
        console.log('user updated', data);
        this.transitionToRoute('/');
      });
    }
}
