function createCalculator(a) {

    return {
        sum(b) {
            return a + b;
        },
        mult(b) {
            return this.sum(5) * b;
        },
        sub(b) {
            return this.mult(10) - b;
        },
        div(b) {
            return this.sub(40) / b;
        },
        set() {
            return (this.div(10) / this.div(10)) * 100;
        }
    }
}
const calc = createCalculator(10);


calc.sum(5);
console.log(`sum = ${calc.sum(5)}`);
calc.mult(10);
console.log(`multiplication = ${calc.mult(10)}`);
calc.sub(40);
console.log(`subtraction =  ${calc.sub(40)}`);
calc.div(10);
console.log(`division = ${calc.div(10)}`);
calc.set(100);
console.log(`set = ${calc.set(100)}`);
