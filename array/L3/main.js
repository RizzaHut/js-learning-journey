const uploadNewMessages = (oldMessages, newMessages) => {
  const updatedMessages = [...oldMessages, ...newMessages];
  return updatedMessages;
};

export { uploadNewMessages };
