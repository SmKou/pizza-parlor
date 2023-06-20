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
    produce: {
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
    size: {
        'sm': 8,
        'mm': 12,
        'lg': 16
    },
    sauce: {
        numFreeItms: 1,
        addOne: 0.5
    },
    produce: {
        numFreeItms: 3,
        addOne: 0.5
    },
    protein: {
        numFreeItms: 1,
        addOne: 1
    },
    cheese: {
        numFreeItms: 1,
        addOne: 0.75
    }
}