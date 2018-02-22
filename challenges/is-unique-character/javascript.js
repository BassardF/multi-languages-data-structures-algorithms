const iucNaive = (str) => {
  for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

const iucDataStructure = (str) => {
  let dic = {};
  for (var i = 0; i < str.length; i++) {
    if(dic[str[i]]) return false;
    else dic[str[i]] = true;
  }
  return true;
}


console.log("fail test", iucNaive("fail test"), iucDataStructure("fail test"));
console.log("sucçesś", iucNaive("sucçešś"), iucDataStructure("sucçešś"));
