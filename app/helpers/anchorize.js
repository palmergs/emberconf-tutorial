import { helper } from '@ember/component/helper';

export default helper(function anchorize(params/*, hash*/) {
  return params[0]
    .toLowerCase()
    .replace(".", "")
    .replace("-", "")
    .split(" ")
    .join("-");
});
