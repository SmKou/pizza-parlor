function generatePizzaList(pizzas) {
    const order = document.querySelector('.pizza-list');
    for (const id of Object.keys(pizzas)) {
        const options = pizzas[id].options;
        const qty = pizzas[id].qty;
        const ul = document.createElement('ul');
        const size = document.createElement('li');
        size.append(document.createTextNode(`${qty} ${options.size} pizza${(qty > 1) ? s : ''}`));
        ul.append(size);
        for (const topping of Object.keys(options.toppings)) {
            const li = document.createElement('li');
            let description = `${topping}: `;
            if (!topping.length)
                li.append(document.createTextNode('none selected'));
            else {
                for (const opt of options.toppings[topping])
                    description += ' ' + PIZZA_ASPECTS[topping][opt];
                li.append(document.createTextNode(description));
            }
            ul.append(li);
        }
        ul.id = 'pizza-' + id;
        order.append(ul);
    }
}