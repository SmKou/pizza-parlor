const PIZZA_ASPECTS = {
    size: {
        'sm': 'small',
        'mm': 'medium',
        'lg': 'large'
    },
    sauce: {
        'mgh': 'margherita',
        'afo': 'alfredo',
        'pnk': 'pink',
        'bbq': 'barbecue'
    },
    cheese: {
        'moz': 'mozzarella',
        'prm': 'parmesan',
        'rct': 'ricotta',
        'ft': 'feta',
        'gt': 'goat',
        'rmo': 'romano',
        'ago': 'asiago',
        'bl': 'blue',
        'sc': 'sharp cheddar'
    },
    veggies: {
        'bp': 'bell pepper',
        'cp': 'chili pepper',
        'bsl': 'basil',
        'jlp': 'jalapeño peppers',
        'msh': 'mushrooms',
        'bo': 'black olives',
        'ro': 'red onions',
        'sp': 'spinach',
        'art': 'artichoke hearts',
        'glc': 'garlic',
        'go': 'green onions',
        'tto': 'tomatoes',
        'ba': 'baby arugula',
        'pck': 'pickles',
        'sc': 'sweet corn',
        'zuc': 'zucchini',
        'pin': 'pineapples'
    },
    protein: {
        'pep': 'pepperoni',
        'ssg': 'sausage',
        'eg': 'eggs',
        'bs': 'butter shrimp',
        'hm': 'ham'
    }
}

const PIZZA_PRICES = {
    size: { 'sm': 8, 'mm': 12, 'lg': 16 },
    sauce: { numFreeItms: 1, addOne: 0.25 },
    veggies: { numFreeItms: 3, addOne: 0.5 },
    protein: { numFreeItms: 1, addOne: 1 },
    cheese: { numFreeItms: 1, addOne: 0.75 }
}

function Pizza(size = 'sm', sauce = ['mgh'], cheese = ['moz'], veggies = [], protein = []) {
    if (PIZZA_ASPECTS.size.hasOwnProperty(size))
        this.size = size;
    else
        this.size = 'sm';
    this.price = 0;
    this.toppings = { sauce: [], cheese: [], veggies: [], protein: [] }
    const input = { sauce, cheese, veggies, protein }
    for (const topping of Object.keys(this.toppings)) {
        for (const ipt of input[topping])
            if (PIZZA_ASPECTS[topping].hasOwnProperty(ipt)
                && !this.toppings[topping].includes(ipt))
                this.toppings[topping].push(ipt);
    }
}

Pizza.prototype.setPrice = function () {
    let total = 0;
    total += PIZZA_PRICES.size[this.size];
    for (const type of Object.keys(this.toppings)) {
        const n = this.toppings[type].length - PIZZA_PRICES[type].numFreeItms;
        if (n > 0)
            total += n * PIZZA_PRICES[type].addOne;
    }
    this.price = total;
}