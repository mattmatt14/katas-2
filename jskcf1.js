


function add(a, b) {
    return a + b;

}
    function multiply(a, b) {

       let multi = 0;
       let count = 0;
       while(count < b) {
           multi += add(a, 0)
           count += 1;
       }

       
       
        return multi;
    
     


    }

    function power(a, b) {
       if (b === 0){
           return 1;
       }
       return a * power(a, b - 1);
    }

        function factorial(a) {
            if (a < 0)
            return - 1;
            else if (a == 0)
            return 1;
            
        else{
            return (a * factorial(a - 1));
        }
        }
    
let fact = factorial(5);
let sum = add(4, 8);
let mult = multiply(6, 6);
let pow = power(2, 8);

console.log(sum)
console.log(mult) 
console.log(pow)
console.log(fact)


