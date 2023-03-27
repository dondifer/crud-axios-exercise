let users = [];
const display = document.getElementById("nameDisplay");
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const { data } = res;
    console.log(data);
    users = [...data];
  })
  .catch((err) => console.error(err));

function showUsersConsole() {
  console.log(users);
  users.forEach((element) => {
    display.innerHTML += `<li>${element.name}</li>`;
    console.log(element.name);
  });
}
