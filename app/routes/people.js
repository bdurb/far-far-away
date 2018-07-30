
import Route from '@ember/routing/route';
import axios from 'npm:axios'


export default Route.extend({
  model() {
    axios.get('https://swapi.co/api/people').then((res) => {
      return res.data.results
    })
    }
});
