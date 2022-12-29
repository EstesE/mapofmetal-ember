import Component from '@glimmer/component';

export default class AboutUsComponent extends Component {
  constructor() {
    super(...arguments);
    console.error('this is a test error');
  }
}
