let sum = 0;
for (let i = 1; i <= 15; i++) {
    if(sum == 3)
    {
        continue;
    }
    console.log(sum);
    
  sum += i;
  if(sum == 8){
    break;
  }
}
console.log("Sum:", sum);
