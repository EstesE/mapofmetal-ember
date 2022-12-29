import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action, set } from '@ember/object';
import config from 'mapofmetal-ember/config/environment';

export default class ApplicationController extends Controller {
  @service('analytics') analytics;
  @service('notifications') notifications;

  constructor() {
    super(...arguments);
    // debugger;
  }

  @action
  trackEvent(eventLabel) {
    // debugger;
    // const analytics = get(this, 'analytics');
    const analytics = this.analytics;
    analytics.trackEvent({ action: 'test' });
  }

  @action
  displayNotification(type) {
    // debugger;
    if (type === 'all') {
      let types = [ 'info', 'warning', 'error', 'success'];
      types.forEach((type, index) => {
        this.notifications[type](`This is the <b>${type}</b> notification`, {
          htmlContent: true,
          autoClear: true,
          clearDuration: 2000 * (index + 1)
        });
      });
    } else {
      this.notifications[type]('this is a test', {
        autoClear: true,
        clearDuration: 2000
      });
    }
  }
}
