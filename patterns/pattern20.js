star = "";

for (i = 0; i <= 6; i++) {
  for (j = 0; j < i; j++) {
    star += "*";
  }

  for (k = 0; k < 12 - 2 * j; k++) {
    star += " ";
  }
  for (l = 0; l < i; l++) {
    star += "*";
  }
  star += "\n";
}
for (i = 1; i < 6; i++) {
  for (j = 0; j <= 5 - i; j++) {
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
console.log(star);
