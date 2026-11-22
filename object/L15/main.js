function mergeTemplates(defaultTemplates, customTemplates) {
  const newTemplate = {...defaultTemplates, ...customTemplates};
  return newTemplate;
}

// don't touch below this line

export { mergeTemplates };
