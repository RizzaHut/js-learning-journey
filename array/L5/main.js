const getCleanMessages = (messages, badWord) => {
  const cleanMessages = [];

  for (const message of messages) {
    if (message.toLowerCase().includes(badWord.toLowerCase())) {
      continue;
    }
    cleanMessages.push(message);
  }

  return cleanMessages
};

export { getCleanMessages };
