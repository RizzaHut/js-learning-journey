function fixUserMap(brokenMap) {
  const fixedMap = new Map();

  for (const [k,v] of brokenMap) {
    let fullName = `${k.fname} ${k.lname}`;

    fixedMap.set(fullName, v);
  }

  return fixedMap
}

export { fixUserMap };
