import { helper } from '@ember/component/helper';

export default helper(function formatName(params/*, hash*/) {
  if (params && params[0]) {
    return params[0].split('__')[1];
  }
  return params;
});
