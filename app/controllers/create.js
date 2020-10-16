import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
  url = 'https://usuarios.in/api/users/';
  file;
  @action
    createUser(id){
      const body = {
        name: this.get('name'),
        company:this.get('company'),
        email: this.get('email'),
        text: this.get('text'),
        avatar: this.get('image')
      }
      fetch(this.url, {
        method: 'POST',
        body: body
      }).then((resp) => resp.json())
      .then((data)=> { this.transitionToRoute('/')});
    }

  @action
    uploadFile(event){
      var self = this;
      const reader = new FileReader();
      const file = event.target.files[0];
      let imageData;
      reader.onload = function(){
        imageData = reader.result;
        self.set('image', imageData);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      this.file = reader.result;
    }
}
