// let display = "";

// let everything = "";

// var x = [];

function checkType(val) {
  if (val == parseInt(val) || val.match(/^[A-Za-z]+$/)) return true;
  else return false;
}

// function setup() {
//   display = createP("STARTING");
//   display.class("results");
// }

// function draw() {
//   var sample = [1, 2, 3];
//   if (x.length != 0) {
//     sample = x;
//     everything = "";
//   }
//   arr1 = new permute(sample);
//   var temp = arr1.permuteUnique();
//   console.log(temp);

//   for (let i = 0; i < temp.length; i++) {
//     everything += temp[i] + "<br>";
//   }
//   textFont("Courier");
//   display.html(everything);
//   noLoop();
// }

class permute {
  constructor(num) {
    this.val = num;
  }

  dfs(r, curr, remaining) {
    if (remaining.length === 0) {
      r.push(curr);
      return;
    }
    for (let i = 0; i < remaining.length; ++i) {
      // send a copy down the recurssion
      // add nums[i] to cur and remove the i'th number in remaining nums
      this.dfs(
        r,
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
      // skip similar numbers, this require the nums array to be sorted, thats why we sort nums before calling the permute method in main method.
      while (remaining[i + 1] === remaining[i]) ++i;
    }
  }

  permuteUnique() {
    const result = [];
    this.val.sort((a, b) => a - b);
    this.dfs(result, [], this.val);
    return result;
  }
}
