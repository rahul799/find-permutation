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
    text.innerHTML += "<span>" + temp[i] + "<br>" + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
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
