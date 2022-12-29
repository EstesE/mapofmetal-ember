import Service from '@ember/service';
import EmberPageTitleService from 'ember-page-title/services/page-title';

// export default class PageTitleService extends Service {
export default class PageTitleService extends EmberPageTitleService {
  titleDidUpdate(title) {
    console.log(`title updated: ${title}`);
  }
}
