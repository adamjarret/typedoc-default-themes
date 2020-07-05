const { SafeString } = require('handlebars');

module.exports = {
  renderBreadcrumbs: function (model, options) {
    var html = '';

    function render(m) {
      if (m.name === 'guides' || m.name === 'cli') {
        html += options.fn({ name: 'Home', url: 'index.html' });
        html += options.fn({ name: m.name });
      } else if (m.parent) {
        render(m.parent);
        html += options.fn(m);
      } else {
        html += options.fn({ name: 'Home', url: 'index.html' });
        html += options.fn({ name: 'API' });
        html += options.fn({ name: 'Modules', url: m.url });
      }
    }

    render(model);

    return new SafeString(html);
  }
};
