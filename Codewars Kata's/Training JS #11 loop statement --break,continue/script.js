function grabDoll(dolls){
    var bag=[];
    for (var i=0;i<dolls.length;i++){
      if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
        bag.push(dolls[i]);
      } else {
        continue;
      }
      
      if (bag.length === 3) {
        break;
      }
    }
    return bag;
  }