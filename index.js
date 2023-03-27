let users = [];
const display = document.getElementById("nameDisplay");
const displayImg = document.getElementById("imgeRand");
const displayBreed = document.getElementById("imgBreed");
const gitData = document.getElementById("gitData");
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

function printAll() {
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {});
}

function printRandom() {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      console.log(res.data);
      displayImg.innerHTML = `<img width="200" height="200" src="${res.data.message}" />`;
    })
    .catch((err) => {});
}

function printHounds() {
  axios
    .get("https://dog.ceo/api/breed/akita/images")
    .then((res) => {
      console.log(res.data.message);
      displayBreed.innerHTML = "";
      res.data.message.forEach((image) => {
        displayBreed.innerHTML += `<img width="200" height="200" src="${image}" />`;
      });
    })
    .catch((err) => {});
}

function printHounds() {
  const inputValue = document.getElementById("userId");
  axios
    .get(`https://api.github.com/users/${inputValue.value}`)
    .then((res) => {
      console.log(res.data.avatar_url);
      console.log(res.data.login);
      console.log(res.data.public_repos);
      gitData.innerHTML = "";
      gitData.innerHTML = `<img width="200" height="200" src="${res.data.avatar_url}" /> <p><strong>${res.data.login}:</strong>Public repos:${res.data.public_repos}</p>`;
    })
    .catch((err) => {});
}
