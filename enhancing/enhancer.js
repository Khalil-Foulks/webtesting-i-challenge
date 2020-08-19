module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const restoredItem = {...item}
  restoredItem.durability = 100;

  return restoredItem;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
