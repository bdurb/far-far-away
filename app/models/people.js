import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  height: DS.attr(),
  hair_color: DS.attr(),
  eye_color: DS.attr(),
  gender: DS.attr()
});
