import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class MapRoute extends Route {
  @service('data') dataRepository;
  // @service headData;

  model() {
    let promises = [this.dataRepository.getGenres()]
    return RSVP.all(promises).then((array) => {
      return {
        genres: array[0]
      };
    }).catch(error => {
      debugger;
    });
  }

  afterModel() {
    // this.headData.title = 'Map';
  }

  setupController(controller, models) {
    // debugger;
    models = {
      genres: models.genres
    };
    controller.setProperties(models);
  }
}
