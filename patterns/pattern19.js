star = "";

for (i = 0; i <= 5; i++) {
  for (j = 0; j < 6 - i; j++) {
    star += "*";
  }
  for (k = 0; k < 2 * i; k++) {
    star += " ";
  }
  for (l = 0; l < 6 - i; l++) {
    star += "*";
  }
  star += "\n";
}
for (a = 0; a < 6; a++) {
  for (j = 0; j <= a; j++) {
    star += "*";
  }
  for (b = 0; b < 12 - 2 * j; b++) {
    star += " ";
  }
  for (c = 0; c <= a; c++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
