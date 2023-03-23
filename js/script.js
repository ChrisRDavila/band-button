window.onload = function() {

  document.querySelector("#Light").onclick = Darker;

  document.querySelector("#Dark").onclick = Lighter;

  function Darker() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  function Lighter() {
    document.body.style.backgroundColor = "pink;"
    document.body.style.color = "black";
  }
}