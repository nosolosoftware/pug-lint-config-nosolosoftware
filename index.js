module.exports = {
  maximumLineLength: 100,
  validateIndentation: 2,
  disallowMultipleLineBreaks: true,
  disallowTrailingSpaces: true,
  requireIdLiteralsBeforeAttributes: true,
  disallowClassLiteralsBeforeIdLiterals: true,
  disallowIdAttributeWithStaticValue: true,
  disallowClassAttributeWithStaticValue: true,
  validateSelfClosingTags: true,
  validateTemplateString: true,
  validateAttributeSeparator: {
    separator: ' ',
    multiLineSeparator: '\n  '
  },
  disallowSpacesInsideAttributeBrackets: null,
  requireClassLiteralsBeforeAttributes: true,
  disallowDuplicateAttributes: true,
  disallowAttributeTemplateString: 'all',
  disallowTemplateString: 'all',
  maximumNumberOfLines: 500,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  validateAttributeQuoteMarks: '"',
  validateDivTags: true
}
