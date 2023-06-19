window.onload = loadApp;

function loadApp() {
    let pizza = {};
    let receipt = {};

    

    document.querySelectorAll('[type="submit"]:not(#submit-order)').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            const aspect = e.target.id.split('-')[1];
            if (aspect === 'preset') {
                const preset = document.querySelector('[name="preset"]:checked');
                pizza = declarePreset(preset.value);
            }
            else if (aspect === 'size') {
                const size = document.querySelector('[name="size"]:checked');
                console.log(size);
                pizza.setSize(size.value);
            }
            else {
                const toppings = document.querySelectorAll(`[name="${aspect}"]:checked`).map(t => t.value);
                pizza.clearTopping(aspect);
                for (const topping of toppings)
                    pizza.addTopping(type, topping);
            }
            console.log(pizza);
        })
    })
    document.querySelectorAll('[type="reset"]').forEach(elem => {
        elem.addEventListener('click', e => {})
    })
}