module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancedItem = {...item}

  if(enhancedItem.enhancement === 20){
    return enhancedItem
  }else {
    enhancedItem.enhancement += 1 
    return enhancedItem; 
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const restoredItem = {...item}
  restoredItem.durability = 100;

  return restoredItem;
}

function get(item) {
  return { ...item };
}
