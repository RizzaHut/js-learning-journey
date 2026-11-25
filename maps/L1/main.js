function addToPhonebook(phoneNumber, name, phoneBook) {
  const phoneBookCopy = new Map(phoneBook);
  phoneBookCopy.set(phoneNumber, name)
  return phoneBookCopy
}

// don't touch below this line

export { addToPhonebook };
