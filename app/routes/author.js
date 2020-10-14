import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AuthorRoute extends Route {
  url = 'https://reqres.in/api/users/';
  show = false;

  model(params){
    const { author_id } = params;
    return fetch( this.url + author_id)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      return data
    })
  }

  @action
    deleteUser(){
      fetch(this.url + this.author_id, {
        method: 'DELETE'
      }).then(() => console.log('user delete'))
      .then(()=> this.transitionTo('/'))
    }

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
    updateUser(){
      const body = { name: this.get('Name'), job: this.get('Job') }
      fetch(this.url + this.author_id, {
        method: 'PUT',
        body: body
      }).then((resp) => resp.json())
      .then((data)=> {
        console.log(data);
        this.transitionTo('/');
      });
    }
}
