function titleCase(text) {
  if (!text) {
    return '';
  }

  if (text.length < 4) {
    return text.toUpperCase();
  }

  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = titleCase;
