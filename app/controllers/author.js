import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorController extends Controller {
  url = 'https://usuarios.in/api/users/';
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
      const body = {
        name: this.get('name'),
        company: this.get('company'),
        email: this.get('email'),
        text: this.get('text')
      }
      fetch(this.url + id, {
        method: 'PUT',
        body: body,
        headers: { 'Content-Type': 'application/json'}
      }).then((resp) => resp.json())
      .then((data)=> {
        this.transitionToRoute('/');
      });
    }

  @action
    deleteUser(id){
      fetch(this.url + id, {
        method: 'DELETE'
      }).then((data) => console.log(data))
      .then(()=> this.transitionToRoute('/') );
    }
}
