function createCalculator(currentNumber) {
    let calculationResult = currentNumber;
    return {
        sum: (number) => {
            calculationResult += number;
            console.log(`${currentNumber} + ${number} = ${calculationResult}`);
        },
        mult: (number) => {
            calculationResult *= number;
            console.log(`* ${number} = ${calculationResult}`);
        },
        sub: (number) => {
            calculationResult -= number;
            console.log(`- ${number} = ${calculationResult}`);
        },
        div: (number) => {
            calculationResult /= number;
            console.log(`/ ${number} = ${calculationResult}`);
        },
        set: (number) => {
            calculationResult = number;
            console.log(`set = ${calculationResult}`);
        },
    }

}
const calc = createCalculator(10);
calc.sum(5);
calc.mult(10);
calc.sub(40);
calc.div(10);
calc.set(100);
