function clock() {
    var date = new Date();
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("minute").innerHTML = date.getMinutes();
    document.getElementById("secound").innerHTML = date.getSeconds();

}
setInterval(clock, 1000);