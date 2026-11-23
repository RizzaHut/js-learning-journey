function maxMessagesWithinBudget(budget) {
  let totalCost = 0;
  let count = 0;
  for (let i = 0; ; i++) {
    totalCost += 1.0 + (i * 0.01);
    
    if (totalCost > budget) {
      break;
    }
    count++;
  }
  return count
}

export { maxMessagesWithinBudget };
