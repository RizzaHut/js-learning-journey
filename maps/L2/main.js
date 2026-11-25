function createUserMap(users) {
  const map = new Map();
  for (const user of users) {
    let fullName = `${user.fname} ${user.lname}`;
    map.set(fullName, user);
  }

  return map
}

export { createUserMap };
