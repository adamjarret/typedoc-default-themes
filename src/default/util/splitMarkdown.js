const reEOL = /\r?\n/;
const reH2 = /^## (.+)$/;

/**
 * Split markdown text into sections based on H2 elements
 * @internal
 */
function splitMarkdown(text, onSection) {
  const lines = text.split(reEOL);
  const sections = [];

  function finishSection() {
    if (!sections.length) return;
    const section = sections[sections.length - 1];
    section.content = section.lines.join('\n').trim();
    delete section.lines;
    onSection && onSection(section);
  }

  // Iterate over lines
  lines.forEach((line) => {
    const matches = line.match(reH2);

    // Handle the beginning of a new section
    if (matches) {
      // Finish current section if defined
      finishSection();
      // Start new section
      sections.push({
        id: matches[1].replace(/[^A-Za-z0-9_-]/g, '-').toLowerCase(),
        title: matches[1],
        lines: []
      });
    }
    // Handle content in the current section
    else {
      // Create current section if undefined
      if (!sections.length) {
        sections.push({ lines: [] });
      }
      // Add a line to current section
      sections[sections.length - 1].lines.push(line);
    }
  });

  // Finish last section if defined
  finishSection();

  // Return array of sections
  return sections;
}

module.exports = splitMarkdown;
