function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentStatus === "Sending" &&  isDelivered) {
        resolve(`Textio Message ${messageId} has been delivered successfully.`);
      } else if (currentStatus === "Sending" && !isDelivered) {
        resolve(`Textio Message ${messageId} is still sending and cannot be marked as delivered.`);
      } else {
        reject(`Textio Message ${messageId} status updated to ${currentStatus}.`);
      }
    }, 500);
  });
}

// don't touch below this line

export { updateMessageStatus };
