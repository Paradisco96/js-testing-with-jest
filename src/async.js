function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {id: 23, clientName: 'John Smith'};
    resolve(data);
    }, 1000);
    });
  }

function getUser(id) {
  return fetchData()
.then(data => {
if (data.id === id) {
  return data;
}
return null;
});
}

 export { fetchData, getUser };