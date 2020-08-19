module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const restoredItem = {...item}
  
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
