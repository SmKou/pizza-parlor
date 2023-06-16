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
        setSize: function () { updateItem('pizza-size', this.size) },
        preset: '',
        setPreset: function () { updateItem('pizza-preset', this.preset) },
        sauce: 'mgh',
        setSauce: function () { updateItem('pizza-sauce', this.sauce) },
        produce: [],
        setProduce: function () { updateItems('pizza-produce', this.produce) },
        protein: [],
        setProtein: function () { updateItems('pizza-protein', this.protein) },
        cheese: [],
        setCheese: function () { updateItems('pizza-cheese', this.cheese) },
        reset: function () {
            this.size = 'sm';
            this.preset = '';
            this.sauce = 'mgh';
            this.produce = [];
            this.protein = [];
            this.cheese = [];
        }
    }

    const listeners = document.querySelectorAll('form.pizza-details [type="radio"], form.pizza-details [type="checkbox"]');
    listeners.forEach(e => e.addEventListener('change', (event) => {

    }))

    const pizzaDetailsForm = document.querySelector('form.pizza-details');
    pizzaDetailsForm.addEventListener('submit', () => {
        pizzaForm.setSize();
        pizzaForm.setSauce();
        if (document.querySelector('[name="pizza-preset"]:checked'))
            pizzaForm.setPreset();
        if (document.querySelector('[name="pizza-produce"]:checked'))
            pizzaForm.setProduce();
        if (document.querySelector('[name="pizza-protein"]:checked'))
            pizzaForm.setProtein();
    })
}