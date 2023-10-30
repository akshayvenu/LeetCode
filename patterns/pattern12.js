let star = "";
let n = 4;
let temp;
let limit = 6;

for (i = 1; i <= n; i++) {
  temp = i;
  for (j = 1; j <= i; j++) {
    star += j;
  }
  for (k = 1; k <= limit; k++) {
    star += " ";
  }
  limit -= 2;
  for (a = 1; a <= i; a++) {
    star += temp;
    temp--;
  }
  star += "\n";
}
console.log(star);
