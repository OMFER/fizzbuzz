function fizzbuzz(num){
    if(typeof num !== "number"){
        return "Error: the argument is not a number";
    }
    const divisible = (divisor, num ) => num % divisor === 0;

    if(num ===0){
        return 0;
    }
    if (divisible(3, num)&& divisible(5, num)){
        return 'fizzbuzz';
    }
    if (divisible(3, num)){
        return 'fizz';
    }
    if (divisible(5, num)){
        return 'buzz';
    }
    if (num %2 === 0){
        return 'buzz';
    }
    return num;
};

function print(num) {
    for(let i=0;i<=num;i++){
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}
print(16);

module.exports = fizzbuzz;
