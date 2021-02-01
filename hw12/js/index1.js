function Hamburger(size, price, callories) {
    if (!new.target) {
        return new Hamburger(size, price, callories);
    }
    if (size === SIZE_SMALL) {
        price = 50;
        callories = 20;
    } else if (size === SIZE_MEDIUM) {
        price = 75;
        callories = 30;
    } else if (size === SIZE_BIG) {
        price = 100;
        callories = 40;
    }

    this.size = size;
    this.price = price;
    this.callories = callories;

    this.addTopping = function (topping) {
        if (topping === TOPPING_MAYO) {
            this.price += 20;
            this.callories += 5;
        } else if (topping === TOPPING_POTATO) {
            this.price += 15;
            this.callories += 10;
        } else if (topping === TOPPING_SALAD) {
            this.price += 20;
            this.callories += 5;
        } else if (topping === TOPPING_SPICE) {
            this.price += 15;
            this.callories += 0;
        } else if (topping === TOPPING_CHEESE) {
            this.price += 10;
            this.callories += 20;
        }
    }

    this.getPrice = function () {
        console.log(`Price with sauce: ${this.price}`);
    }
    this.getCallories = function () {
        console.log(`Callories with sauce: ${this.callories}`);
    }
}
const SIZE_SMALL = 'SIZE_SMALL';
const SIZE_MEDIUM = 'SIZE_MEDIUM';
const SIZE_BIG = 'SIZE_BIG';

const TOPPING_MAYO = 'TOPPING_MAYO';
const TOPPING_POTATO = 'TOPPING_POTATO';
const TOPPING_SALAD = 'TOPPING_SALAD';
const TOPPING_SPICE = 'TOPPING_SPICE';
const TOPPING_CHEESE = 'TOPPING_CHEESE';

const hamburger = new Hamburger(SIZE_SMALL);
console.log(hamburger.size);

hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_CHEESE);

hamburger.getPrice();
hamburger.getCallories();