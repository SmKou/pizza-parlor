const PIZZA_TOPPINGS = {
    type: {
        sauce: {
            'sm': 0,
            'mm': 0.5,
            'lg': 1
        },
        produce: {
            free: 3,
            price: 0.5
        },
        protein: {
            free: 1,
            price: 1
        },
        cheese: {
            free: 1,
            price: 0.75
        }
    },
    size: {
        'sm': {
            fullname: 'Small',
            price: 8,
            radius: 10
        },
        'mm': {
            fullname: 'Medium',
            price: 12,
            radius: 14
        },
        'lg': {
            fullname: 'Large',
            price: 16,
            radius: 20
        }
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

function Receipt() {
    this.pizzas = [];
    this.total = 0;
    this.customer = '';
    this.address = '';
    this.status = false;
}

function Pizza() {
    this.price = 0;
    this.size = '';
    this.toppings = {
        sauce: 'mgh',
        produce: [],
        protein: [],
        cheese: []
    };
}

Pizza.prototype.addTopping = function (type, item) { }

Pizza.prototype.calculateCost = function () { }