function addShow({ item }) {
  var existingItems = JSON.parse(localStorage.getItem("items"));
  if (existingItems == null) existingItems = [];
  existingItems.push(item);
  localStorage.setItem("items", JSON.stringify(existingItems));
}

function removeShow({ id }) {
  var existingItems = JSON.parse(localStorage.getItem("items"));
  if (existingItems == null) existingItems = [];
  remainingItems = existingItems.filter((data) => data.id != id);
  localStorage.setItem("items", JSON.stringify(remainingItems));
}

export default controlShows = {
  addShow,
  removeShow,
};
