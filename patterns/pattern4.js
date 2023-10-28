let n = 5;
let string = "";

function pattern4() {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      string += i;
    }
    string += "\n";
  }
  console.log(string);
}

pattern4(n);
