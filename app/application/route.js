import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ApplicationRoute extends Route {
  @service('data') dataRepository;
  @service('property-repository') propertyRepository;

  async model() {
    let route = this;
    let promises = [route.dataRepository.getGenres(), route.propertyRepository.getProperties()]
    try {
      const array = await RSVP.all(promises);
      return {
        genres: array[0],
        properties: array[1]
      };
    } catch (error) {
      debugger;
    }
  }

  setupController(controller, models) {
    controller.setProperties(models);
  }
}
