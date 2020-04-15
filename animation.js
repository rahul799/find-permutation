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
    text.innerHTML += "<div class='div'>";
    for (let j = 0; j < temp[i].length; j++) {
      text.innerHTML += "<span class='span1'>" + temp[i][j] + " , " + "</span>";
    }
    text.innerHTML += "<br>" + "</div>";
  }

  let setTime = 100;

  let char = 0;
  let timer = setInterval(onTick, setTime * temp[0].length);
  let childTimer = setInterval(childOnTick, setTime);

  function onTick() {
    const div = text.querySelectorAll(".div")[char];
    div.classList.add("fade1");
    char++;
    if (char === temp.length) {
      complete();
      char = 0;
      return;
    }
  }

  let count = 0;

  function childOnTick() {
    const span = text.querySelectorAll(".span1")[count];
    span.classList.add("childFade");
    count++;
    if (count == temp[0].length * temp.length) {
      childComplete();
      return;
    }
  }

  function childComplete() {
    clearInterval(childTimer);
  }

  function complete() {
    clearInterval(timer);
  }
}
