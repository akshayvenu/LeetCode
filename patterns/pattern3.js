let n = 5;
let string = "";

function pattern3() {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      string += j;
    }
    string += "\n";
  }
  console.log(string);
}

pattern3(n);
