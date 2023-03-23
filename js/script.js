window.onload = function() {

  document.querySelector("#Light").onclick = Lighter;

  document.querySelector("#Dark").onclick = Darker;

  function Darker() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  function Lighter() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}