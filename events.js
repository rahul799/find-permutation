window.onload = function() {
  document.getElementById("num").focus();
};

var input = document.getElementById("num");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

document.getElementById("add").onclick = function() {
  var temp = document.getElementById("num").value;
  if (checkType(temp)) {
    // [...x, x.push(temp)];
    [...y, y.push(temp)];
    animate();
    // draw();
  } else {
    alert("Please Enter a valid Integer");
  }
  document.getElementById("num").value = "";
  document.getElementById("num").focus();
};
