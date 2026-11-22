function createMessage(phoneNumber, message) {
  const messageObj = {
    phoneNumber: phoneNumber,
    message: message,
    messageLength: message.length,
  };
  return messageObj
}

export { createMessage };
