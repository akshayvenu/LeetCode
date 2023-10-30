let n = 5;
let string = "";
let t = 5;

function pattern() {
  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      string = string + " ";
    }
    for (k = 0; k < t * 2 - 1; k++) {
      string = string + "*";
    
    }
    t--;

    string = string + "\n";
  }
  console.log(string);
}

pattern();
