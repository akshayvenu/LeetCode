let star = "";
let n = 5;
let num;

for (i = 0; i < n; i++) {
  if (i % 2 == 0) {
    num = 1;
  } else {
    num = 0;
  }
  for (j = 0; j <= i; j++) {
    star += num;

    num = 1 - num;
  }
  star += "\n";
}
console.log(star);
  