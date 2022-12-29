import Service from '@ember/service';

export default class PropertyRepositoryService extends Service {
  getProperties() {
    return [
      {
        name: 'Magnolia Manor',
        path: 'magnolia-manor'
      }, {
        name: 'Anchor Apartments',
        path: 'anchor-apartments'
      }, {
        name: 'Hilltop House',
        path: 'hilltop-house'
      }
    ]
  }
}
