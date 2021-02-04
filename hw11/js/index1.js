function createCalculator(initialNumbers) {
    let calculationResult = initialNumbers;
    return {
        sum: function (number) {
            calculationResult += number;
            console.log(`${initialNumbers} + ${number} = ${calculationResult}`);
        },
        mult: function (number) {
            calculationResult *= number;
            console.log(`* ${number} = ${calculationResult}`);
        },
        sub: function (number) {
            calculationResult -= number;
            console.log(`- ${number} = ${calculationResult}`);
        },
        div: function (number) {
            calculationResult /= number;
            console.log(`/ ${number} = ${calculationResult}`);
        },
        set: function (number) {
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
