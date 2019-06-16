function clock() {
  const fulldate = new Date();
  var hours = fulldate.getHours();
  var mins = fulldate.getMinutes();
  var seconds = fulldate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + mins;
  document.getElementById("second").innerHTML = ":" + seconds;
}

setInterval(clock, 1000);
