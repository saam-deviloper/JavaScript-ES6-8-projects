setInterval(() => {
  const spanClock = document.getElementById("spanClock");
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  // hours = (hours < 10 ) ? `0 ${hours}`:hours;

  //another way to show if clock smaller than 2digits

  spanClock.innerText = ` ${hours} : ${minutes} : ${seconds}`;
}, 1000);


