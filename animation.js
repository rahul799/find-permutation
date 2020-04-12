const text = document.querySelector(".abc");
arr2 = new permute([1, 2, 3, 4, 5]);
var temp = arr2.permuteUnique();

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
