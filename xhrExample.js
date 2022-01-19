const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.onload = () => {
//   const data = JSON.parse (xhr.response);
//     console.log(data[0]['name']);
// };
// xhr.send();
//GET sample

const body = {
  id: "2",
  userId: "1",
  title:"qui est esse"
};
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader('Content-Type','Application/json')
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log(data);
  console.log(xhr.status, "status of post command");
};
xhr.send(JSON.stringify(body));
