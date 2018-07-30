
import Route from '@ember/routing/route';
import axios from 'npm:axios'


export default Route.extend({
  model() {
    axios.get('https://swapi.co/api/people').then((res) => {
      console.log(res.data.results)
      return res.data.results
    })
    .catch((err) => {
      console.log(err);
    })
    }
});
