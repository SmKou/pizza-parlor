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
        'pep': 'Pepperoni',
        'ssg': 'Sausage',
        'eg': 'Eggs',
        'bs': 'Butter shrimp',
        'hm': 'Ham'
    }
}

const PIZZA_PRICES = {
    size: { 'sm': 8, 'mm': 12, 'lg': 16 },
    sauce: { numFreeItms: 1, addOne: 0.25 },
    veggies: { numFreeItms: 3, addOne: 0.5 },
    protein: { numFreeItms: 1, addOne: 1 },
    cheese: { numFreeItms: 1, addOne: 0.75 }
}

function Pizza(veggies, protein, size = 'sm', sauce = ['mgh'], cheese = ['moz']) {
    this.size = size;
    this.price = 0;
    this.toppings = {
        sauce,
        cheese,
        veggies,
        protein
    }
}

Pizza.prototype.setSize = function (size) {
    if (PIZZA_ASPECTS.size.hasOwnProperty(size))
        this.size = size;
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