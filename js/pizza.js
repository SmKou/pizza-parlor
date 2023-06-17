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
            toppings: {
                sauce: ['mgh'],
                produce: ['bsl'],
                cheese: ['moz']
            }
        },
        'sup': {
            fullname: 'Supreme',
            toppings: {
                sauce: 'mgh',
                produce: ['bp', 'bo', 'ro', 'msh'],
                cheese: ['moz'],
                protein: ['pep', 'ssg']
            }
        },
        'ch': {
            fullname: 'Five Cheese',
            toppings: {
                cheese: ['moz', 'prm', 'rmo', 'ago', 'ft']
            }
        },
        'sa': {
            fullname: 'Spinach and Artichoke',
            toppings: {
                produce: ['art', 'sp', 'glc'],
                cheese: ['moz', 'prm']
            }
        },
        'wt': {
            fullname: 'White',
            toppings: {
                sauce: 'afo',
                cheese: ['moz', 'prm', 'rct'],
                produce: ['glc']
            }
        },
        'grk': {
            fullname: 'Greek',
            toppings: {
                sauce: 'mgh',
                cheese: ['ft'],
                produce: ['sp', 'bo', 'tto', 'ro']
            }
        },
        'bf': {
            fullname: 'Breakfast',
            toppings: {
                sauce: 'mgh',
                protein: ['eg'],
                produce: ['bp', 'ro', 'tto'],
                cheese: ['moz']
            }
        },
        'cap': {
            fullname: 'Caprese',
            toppings: {
                sauce: 'mgh',
                produce: ['bsl', 'tto'],
                cheese: ['moz']
            }
        },
        'hwn': {
            fullname: 'Hawaiian',
            toppings: {
                sauce: 'bbq',
                produce: ['pin'],
                protein: ['hm'],
                cheese: ['moz']
            }
        },
        'jlp': {
            fullname: 'Jalapeño',
            toppings: {
                sauce: 'bbq',
                produce: ['zuc', 'sc', 'ro', 'jlp'],
                cheese: ['moz']
            }
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
        this.preset = '';
        this.toppings = {
            sauce: 'mgh',
            produce: [],
            protein: [],
            cheese: []
        };
    }

    resetToppings() {
        this.toppings = {
            sauce: 'mgh',
            produce: [],
            protein: [],
            cheese: []
        };
        this.price = 0;
    }
    
    setSize(s) {
        if (['sm', 'mm', 'lg'].includes(s))
            this.size = s;
    }

    setPrice(p) {
        if (p >= 0)
            this.price = p;
    }

    setPreset(pre) {
        if (Objects.keys(PIZZA_TOPPINGS.preset).includes(pre)) {
            this.preset = pre;
            this.resetToppings();
            const toppings = PIZZA_TOPPINGS.preset[pre].toppings;
            for (const type of Object.keys(toppings)) {
                if (type === 'sauce')
                    this.addTopping('sauce', toppings[type]);
                else
                    for (const itm of toppings[type])
                        this.addTopping(type, itm);
            }
        }
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