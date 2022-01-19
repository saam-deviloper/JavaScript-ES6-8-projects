let btnLogin = document.getElementById("btnLogin");
let inputEmail = document.querySelector("#inputEmail");
let inputPass = document.getElementById("inputPassword");
let smPass = document.getElementById("sm-pass");
let btnLoginApi = document.querySelector("#btnLoginApi");

const userData = [
  { name: "hessam", email: "hessam@gmail.com", pass: "12345" },
  { name: "pedram", email: "pedram@gmail.com", pass: "12345" },
];

const signIn = (e) => {
  e.preventDefault();
  let usrname = inputEmail.value;
  let password = inputPass.value;
  if (
    usrname != "" &&
    password != "" &&
    usrname.indexOf("@") != -1 &&
    usrname.indexOf(".com") != -1
  ) {
    //console.log(typeof password)
    userData.forEach((element) => {
      const condit = Object.is(element.email, usrname);
      //email correct
      if (condit) {
        const shartPass = Object.is(element.pass, password);
        //password correct
        if (shartPass) {
          btnLogin.setAttribute(
            "class",
            "btn btn-block btn-success col-4 mt-4 mb-2" 
          );
          document.getElementById(
            "profileName"
          ).innerText = `Hi,${element.name}`;
          smPass.innerText = "logged in successfully!";
          smPass.setAttribute("class", "text-success mb-3");
        } else {
          smPass.innerText = "email or password may incorrected";
          smPass.setAttribute("class", "text-danger mb-3 ");
        }
      }
    });
  } else {
    smPass.innerText = "*inavlid input or some fields are empty";
    smPass.setAttribute("class", "text-danger mb-3");
  }
};
btnLogin.addEventListener("click", signIn);

const signInApi = (e) => {
  e.preventDefault();
  let usrname = inputEmail.value;
  let password = inputPass.value;
  let regex = /\w{2,4}@\w{2,5}\.\w{2,3}/gi;
  let regex2 = /\w{3}/gi;
  let regexTest = regex.test(usrname);
  let regexMatch = usrname.match(regex2);
  console.log(regexMatch, "this words matches with the regularExpresion");
  console.log(regexTest);
  if (
    usrname != "" &&
    password != "" &&
    usrname.indexOf("@") != -1 &&
    usrname.indexOf(".com") != -1 &&
    regexTest
  ) {
    const body = {
      username: usrname,
      password: password,
    };
    const header = {
      "Content-Type": "application/json",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      header: header,
    }).then((Response) => {
      if (Response.ok) {
        console.log("logged in successfully");
        console.log(Response);
        smPass.innerText = "logged in with API successfully!";
        smPass.setAttribute("class", "text-success mb-3");
      }
    });
  } else {
    smPass.innerText = "inavlid input or some fields are empty";
    smPass.setAttribute("class", "text-danger mb-3");
  }
};
btnLoginApi.addEventListener("click", signInApi);
