import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorController extends Controller {
  url = 'https://reqres.in/api/users/';
  show = false;

  @action
    hideButtons(){
      this.show = !this.show;
      const form = document.getElementById('form');
      const edit = document.getElementById('edit');
      const main = document.getElementById('main');
      if(!this.show){
        form.classList.remove('active');
        edit.classList.add('hide');
        main.classList.remove('hide');
      }else{
        form.classList.add('active');
        edit.classList.remove('hide');
        main.classList.add('hide');
      }
    }

  @action
    updateUser(id){
      const body = { name: this.get('Name'), job: this.get('Job') }
      fetch(this.url + id, {
        method: 'PUT',
        body: body
      }).then((resp) => resp.json())
      .then((data)=> {
        console.log('user updated', data);
        this.transitionToRoute('/');
      });
    }

  @action
    deleteUser(id){
      fetch(this.url + id, {
        method: 'DELETE'
      }).then(() => console.log('user delete'))
      .then(()=> this.transitionToRoute('/') );
    }
}
