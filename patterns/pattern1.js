let n = 5;
let string = "";

function pattern1(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      string += "*";
    }
    string = string + "\n";
  }
  console.log(string);
}
pattern1(n)

