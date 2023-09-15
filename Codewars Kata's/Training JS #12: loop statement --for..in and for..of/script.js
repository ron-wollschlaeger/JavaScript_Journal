function giveMeFive(obj){
    let result = [];
    for (let i in obj) {
      if (i.length == 5) {
        result.push(i);
      }
      if (obj[i].length == 5) {
        result.push(obj[i]);
      }
    }
    return result;
  }