let string = "";
let n = 4;

const pattern = () => {
  for (i = 1; i <= n; i++) {
    for (j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  for (i = 1; i < 5; i++) {
    for (j = 0; j < 5 - i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

pattern();
