import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('https://swapi.co/api/people')
    .then((res) => {
      return res.results
      console.log(res.results)
    })
  }
});
