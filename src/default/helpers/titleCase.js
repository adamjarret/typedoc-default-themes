const { SafeString } = require('handlebars');
const titleCase = require('../util/titleCase');

module.exports = {
  titleCase: function (text, options) {
    return new SafeString(options.fn(titleCase(text)));
  }
};
