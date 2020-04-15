var y = [];
var raw = [1, 2];
animate();

function animate() {
  const text = document.querySelector(".permute");

  if (y.length != 0) {
    raw = y;
    text.innerHTML = "";
  }

  arr1 = new permute(raw);

  var temp = arr1.permuteUnique();

  for (let i = 0; i < temp.length; i++) {
    text.innerHTML += "<div class='random'>";
    for (let j = 0; j < temp[i].length; j++) {
      text.innerHTML += "<span>" + temp[i][j] + "</span>";
    }
    text.innerHTML += "<br>" + "</div>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const div = text.querySelectorAll(".random")[char];
    div.classList.add("fade");
    char++;
    if (char === temp.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
  }
}
