let ans = 1;
for(let i=1;i<=4;i++){
    ans = ans * i ; 
}
console.log(ans)

// how it work first understand this maths concept 
// n! =  n*(n-1)*n(n-2)*...3*2*1;
// let say 1st declare ans 1 beacuse 0! is also 1 
// go for loop part is i declare is for 1 then go for how much calculate factorial number 
// then increament the value of i 
// ans = ans * i => 1*1
// ans = 1 => 1*2
// ans = 2 => 2*3;
// ans = 6 => 6*4;
// ans = 24 
