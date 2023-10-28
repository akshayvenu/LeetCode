let n = 5;
let string = "";

function pattern() {
  for (i = 0; i < n; i++) {
    for (j = 1; j <= n - i; j++) {
      string = string + j;
    }
    string = string + "\n";
  }
  console.log(string);
}

pattern();
