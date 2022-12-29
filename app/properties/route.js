import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PropertiesRoute extends Route {
  // @service('headData') headData;
  model() {
    return this.modelFor('application').properties;
  }

  afterModel(model, transition) {
    // debugger;
    // this.headData.title = 'Properties';
  }
}
