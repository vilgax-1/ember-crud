import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  url = 'https://reqres.in/api/users/';

  model(params){
    const { author_id } = params;
    return fetch( this.url + author_id)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      return data
    })
  }
}
