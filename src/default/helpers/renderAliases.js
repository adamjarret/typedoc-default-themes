const { SafeString } = require('handlebars');
const {
  aliases: allAliases,
  isNegativeAlias
} = require('../../../../../packages/cli/lib/util/parseArgs');

module.exports = {
  renderAliases: function (member, options) {
    let html = '';

    if (member && member.parent && member.parent.name === 'Args') {
      const aliases = allAliases[member.name];
      if (aliases) {
        aliases.forEach((alias) => {
          html += options.fn({
            text: `${alias.length === 1 ? '-' : '--'}${alias}`,
            className: isNegativeAlias(alias) ? 'negative' : ''
          });
        });
      }
    }

    return new SafeString(html);
  }
};
