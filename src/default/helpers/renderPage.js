const { SafeString } = require('handlebars');
const { helpText } = require('../../../../../packages/cli/lib/commands/help');
const splitMarkdown = require('../util/splitMarkdown');

const fence = '```';
const markerHelp = '%%HELP%%';

module.exports = {
  renderPage: function (markdown, options) {
    let html = '';

    if (markdown) {
      splitMarkdown(markdown, (section) => {
        if (section.content && section.content.indexOf(markerHelp) > -1) {
          const help = `${fence}sh\n${helpText.replace(/^\s+/, '')}\n${fence}`;
          section.content = section.content.replace(markerHelp, help);
          section.className = 'code-panel';
        }
        html += options.fn(section);
      });
    }

    return new SafeString(html);
  }
};
