import Route from '@ember/routing/route';

export default class PropertiesPropertyRoute extends Route {
  model(param) {
    return this.modelFor('application').properties.findBy('path', param.path);
  }
}
