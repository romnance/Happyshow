function addShow(item) {
  var existingItems = JSON.parse(localStorage.getItem("items"));
  if (existingItems == null) existingItems = [];
  existingItems.push(item);
  localStorage.setItem("items", JSON.stringify(existingItems));
}

function removeShow(id) {
  var existingItems = JSON.parse(localStorage.getItem("items"));
  if (existingItems == null) existingItems = [];
  const remainingItems = existingItems.filter((data) => data.id != id);
  localStorage.setItem("items", JSON.stringify(remainingItems));
}

function checkShow(id) {
  var existingItems = JSON.parse(localStorage.getItem("items"));
  if (existingItems == null) existingItems = [];
  const findShow = existingItems.filter((data) => data.id == id);
  if (findShow.length > 0) return true;
  return false;
}



const controlShows = {
  addShow,
  removeShow,
  checkShow,
};

export default controlShows;
