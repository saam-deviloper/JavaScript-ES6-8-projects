const apiKey = "3a4e5ad5e81f8dc693e3ed5d28648356";
let cityName;
//console.log(src);
let weatherInput = document.getElementById("weatherInput"); //input weather
let submit = document.getElementById("submit"); //button add
let lists = document.getElementById("lists"); //ul want to append children here
let inputHelp = document.getElementById("inputHelp"); //subtext under input handle errors

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (weatherInput.value != "") {
    cityName = weatherInput.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((Response) => Response.json())
      .then((data) => {
        let li = document.createElement("li");
        const { weather, name, main, sys } = data;
        let imgLink = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        console.log(imgLink);
        li.innerHTML = `
        <div class="card text-center ms-2" style="width: 16rem;">
            <div class="d-inline-flex justify-content-center">
            <img class="card-img-top" src="${imgLink}" alt="" style="width:100px;height:auto">
            <div style="display:inline-flex"><p class="display-3">${Math.round(
              main.temp
            )}&deg</p></div> 
            </div>
            <div class="card-footer" >
               <h5 class="card-titleّ">${name},${sys.country}</h5>
                <p class="card-text">${weather[0].description}</p>
             </div>
         </div>
        `;
        lists.appendChild(li);
        weatherInput.value = "";
        inputHelp.innerText = "search any place";
        inputHelp.setAttribute('class','text-muted')
      })
      .catch((err) => console.log(err));
  } else {inputHelp.innerText = "invalid input";
inputHelp.setAttribute('class','text-danger')}
});
