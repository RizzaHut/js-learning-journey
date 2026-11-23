function getCleanRank(reviewWords) {
  const badWords = ["dang", "shoot", "heck"];
  let total = 0;

  for (let i = 0; i <= badWords.length; i++) {
    if (reviewWords.includes(badWords[i])) {
      total++;
    }
  }

  if (total === 0) {
    return "clean";
  } else if (total === 1) {
    return "dirty";
  } else {
    return "filthy";
  }
}

export { getCleanRank };
