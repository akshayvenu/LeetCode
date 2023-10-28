let n = 5;
let string = "";

function pattern2() {
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

pattern2(n);
