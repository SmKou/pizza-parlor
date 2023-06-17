function updateItem(name, prop) {
    const data = document.querySelector(`[name="${name}"]:checked`);
    if (data && prop !== data.value)
        prop = data.value;
}

function updateItems(name, prop) {
    const data = document.querySelectorAll(`[name="${name}"]:checked`);
    data.forEach(e => {
        const itm = e.value;
        if (!prop.includes(itm))
            prop.push(itm);
    })
}

window.onload = () => {
    const pizzaForm = {
        size: 'sm',
        preset: '',
        sauce: 'mgh',
        produce: [],
        protein: [],
        cheese: [],
        reset: function () {
            this.size = 'sm';
            this.preset = '';
            this.sauce = 'mgh';
            this.produce = [];
            this.protein = [];
            this.cheese = [];
        }
    }
    let activeSection = '#pizza-size';
    const receipt = new Receipt();
    let pizza = new Pizza();

    const pizzaDetails = document.querySelectorAll('h3.button');
    pizzaDetails.forEach(elem => {
        elem.addEventListener('click', e => {
            document.querySelector(activeSection).classList.add('hidden');
            const id = '#pizza-' + e.target.id.split('-')[0];
            activeSection = id;
            document.querySelector(activeSection).classList.remove('hidden');
        })
    })

    const pizzaOptions = document.querySelectorAll('.pizza [type="radio"], .pizza [type="checkbox"]');
    pizzaOptions.forEach(elem => {
        elem.addEventListener('change', (e) => {
            const type = e.target.name;
            const itm = e.target.value;
            if (e.checked) {
                if (type === 'size')
                    pizza.setSize(itm);
                else if (type === 'preset')
                    pizza.setPreset(itm);
                else
                    pizza.addTopping(type, itm);
            }
            else {
                if (type !== 'size' && type !== 'preset')
                    pizza.removeTopping(type, itm);
            }
            console.log(pizza);
        })
    })
}