let n = 5;
let t = 0;
let p = 5;
string = "";
const pattern = () => {
  for (i = 1; i <= n; i++) {
    for (j = 0; j < n - i; j++) {
      string += " ";
    }
    for (k = 0; k < 2 * t + 1; k++) {
      string += "*";
    }
    t++;
    string += "\n";
  }
  for (x = 0; x < 5; x++) {
    for (y = 0; y < x; y++) {
      string += " ";
    }
    for (z = 0; z < p * 2 - 1; z++) {
      string += "*";
    }
    p--;
    string+="\n"
  }
  console.log(string);
};
pattern();
