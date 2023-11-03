let star = "";
let n = 5;
let temp=1;

for (i = 1; i <= n; i++) {

  for (j = 1; j <=i ; j++) {
    star += temp;
    temp+=1
  }
  star += "\n";
}

console.log(star);
