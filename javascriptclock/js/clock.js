let name = prompt("What is your name?");
document.getElementById("myName").innerHTML = name;

function showTime() {
  let d = new Date();
  let n = d.toLocaleTimeString();
  let day = new Date().toLocaleString("tr-tr", { weekday: "long" });
  document.getElementById("myClock").innerHTML = n + " " + day;
}
setInterval(showTime, 1000);
