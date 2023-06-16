const PIZZA_TOPPINGS = {
    type: {
        produce: { free: 3, price: 0.5 },
        protein: { free: 1, price: 1 },
        cheese: { free: 1, price: 0.75 }
    },
    size: {
        'sm': { fullname: 'Small', price: 8, radius: 10 },
        'mm': { fullname: 'Medium', price: 12.5, radius: 14 },
        'lg': { fullname: 'Large', price: 17, radius: 20 }
    },
    sauce: {
        'mgh': 'Margherita',
        'afo': 'Alfredo',
        'pnk': 'Pink',
        'bbq': 'Barbecue'
    },
    produce: {
        'bp': 'Bell pepper',
        'cp': 'Chili pepper',
        'jlp': 'Jalapeño peppers',
        'msh': 'Mushrooms',
        'bo': 'Black olives',
        'ro': 'Red onions',
        'bsl': 'Basil',
        'sp': 'Spinach',
        'art': 'Artichoke hearts',
        'glc': 'Garlic',
        'go': 'Green onions',
        'tto': 'Tomatoes',
        'ba': 'Baby arugula',
        'pck': 'Pickles',
        'sc': 'Sweet corn',
        'zuc': 'Zucchini',
        'pin': 'Pineapples'
    },
    protein: {
        'pep': 'Pepperoni',
        'ssg': 'Sausage',
        'eg': 'Eggs',
        'bs': 'Butter shrimp',
        'hm': 'Ham'
    },
    cheese: {
        'moz': 'Mozzarella',
        'prm': 'Parmesan',
        'rct': 'Ricotta',
        'ft': 'Feta',
        'gt': 'Goat',
        'rmo': 'Romano',
        'ago': 'Asiago',
        'bl': 'Blue',
        'sc': 'Sharp cheddar'
    },
    preset: {
        'mgh': {
            fullname: 'Margherita',
            sauce: 'mgh',
            produce: ['bsl'],
            cheese: 'moz'
        },
        'sup': {
            fullname: 'Supreme',
            sauce: 'mgh',
            produce: ['bp', 'bo', 'ro', 'msh'],
            cheese: ['moz'],
            protein: ['pep', 'ssg']
        },
        'ch': {
            fullname: 'Five Cheese',
            cheese: ['moz', 'prm', 'rmo', 'ago', 'ft']
        },
        'sa': {
            fullname: 'Spinach and Artichoke',
            produce: ['art', 'sp', 'glc'],
            cheese: ['moz', 'prm']
        },
        'wt': {
            fullname: 'White',
            sauce: 'afo',
            cheese: ['moz', 'prm', 'rct'],
            produce: ['glc']
        },
        'grk': {
            fullname: 'Greek',
            sauce: 'mgh',
            cheese: ['ft'],
            produce: ['sp', 'bo', 'tto', 'ro']
        },
        'bf': {
            fullname: 'Breakfast',
            protein: ['eg'],
            sauce: 'mgh',
            produce: ['bp', 'ro', 'tto'],
            cheese: ['moz']
        },
        'cap': {
            fullname: 'Caprese',
            sauce: 'mgh',
            produce: ['bsl', 'tto'],
            cheese: ['moz']
        },
        'hwn': {
            fullname: 'Hawaiian',
            sauce: 'bbq',
            produce: ['pin'],
            protein: ['hm'],
            cheese: ['moz']
        },
        'jlp': {
            fullname: 'Jalapeño',
            sauce: 'bbq',
            produce: ['zuc', 'sc', 'ro', 'jlp'],
            cheese: ['moz']
        }
    }
}

PIZZA_TOPPINGS.returnFullName = function (shortcode) {
    if (PIZZA_TOPPINGS.size.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.size[shortcode].fullname;
    else if (PIZZA_TOPPINGS.sauce.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.sauce[shortcode];
    else if (PIZZA_TOPPINGS.produce.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.produce[shortcode];
    else if (PIZZA_TOPPINGS.protein.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.protein[shortcode];
    else if (PIZZA_TOPPINGS.cheese.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.cheese[shortcode];
    else if (PIZZA_TOPPINGS.preset.hasOwnProperty(shortcode))
        return PIZZA_TOPPINGS.preset[shortcode].fullname;
    return '';
}

class Pizza {
    constructor() {
        this.size = 'sm';
        this.price = 0;
        this.toppings = {
            sauce: 'mgh',
            produce: [],
            protein: [],
            cheese: []
        };
    }
    
    setSize(s) {
        if (['sm', 'mm', 'lg'].includes(s))
            this.size = s;
    }

    setPrice(p) {
        if (p >= 0)
            this.price = p;
    }

    addTopping(type, item) {
        const topping = this.toppings[type];
        if (type === 'sauce' && topping !== item)
            this.toppings[type] = item;
        else if (!topping.includes(item))
            topping.push(item);
    }

    removeTopping(type, item = '') {
        const topping = this.toppings[type];
        if (type === 'sauce')
            this.toppings[type] = 'mgh';
        else if (item && topping.includes(item)) {
            const i = topping.indexOf(item);
            topping.splice(i, 1);
        }
    }
}

function calculateCost(pizza) {
    if (!pizza.size)
        return 0;
    const size = pizza.size;

    let total = 0;
    total += PIZZA_TOPPINGS.size[size].price;
    for (const topping of Object.keys(pizza.toppings)) {
        if (topping !== 'sauce') {
            const qty = pizza.toppings[topping].length - PIZZA_TOPPINGS.type[topping].free;
            total += (qty > 0) ? qty * PIZZA_TOPPINGS.type[topping].price : 0;
        }
    }
    pizza.setPrice(total);
    return total;
}
 
let pizza = new Pizza();