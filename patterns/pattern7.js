let n = 5;
let string = "";
let t = 0;

function pattern() {
  for (i = 0; i < n; i++) {
    for (j = 1; j < n - i; j++) {
      string = string + " ";
    }
    for (k = 0; k < t * 2 + 1; k++) {
      string = string + "*";
    }
    t++;
    for (j = 1; j < n - i; j++) {
      string = string + " ";
    }
    string = string + "\n";
  }
  console.log(string);
}

pattern();

