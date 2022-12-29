import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class PropertiesIndexRoute extends Route {
  // @service('headData') headData;
  
  // model() {
  //   return {
  //     properties: [
  //       {
  //         name: 'Magnolia Manor',
  //         path: 'magnolia-manor'
  //       }, {
  //         name: 'Anchor Apartments',
  //         path: 'anchor-apartments'
  //       }, {
  //         name: 'Hilltop House',
  //         path: 'hilltop-house'
  //       }
  //     ]
  //   }
  // }


  afterModel(model, transition) {
    // debugger;
    // console.log('properties.index route');
    // this.headData.title = 'Properties';
  }
}
