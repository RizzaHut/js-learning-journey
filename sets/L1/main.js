function deduplicateEmails(emails) {
  const uniqueEmails = new Set();

  for (const email of emails) {
    if (!email.includes(uniqueEmails)) {
      uniqueEmails.add(email);
    }
  }
  return [...uniqueEmails]
}

// don't touch below this line

export { deduplicateEmails };
