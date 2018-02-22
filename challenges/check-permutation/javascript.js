//O(a*b) ?
const checkIsPermutations = (a, b) => {
  if(!a || !b || a.length !== b.length) return false;
  let dic = {};
  for (let i = 0; i < a.length; i++) {
    dic[a[i]] = dic[a[i]] ? dic[a[i]]+1 : 1;
  }
  for (let i = 0; i < b.length; i++) {
    if(dic[b[i]] === undefined || dic[b[i]] < 0) return false;
    else dic[b[i]]--;
  }
  for([c, v] in Object.entries(dic)){
      if(v) return false;
  }
  return true;
}

console.log("lllclcclc", "lccllllc", checkIsPermutations("lllclcclc", "lccllllc"));
console.log("lllclcclc", "lcclclllc", checkIsPermutations("lllclcclc", "lcclclllc"));
