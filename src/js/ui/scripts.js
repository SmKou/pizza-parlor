window.onload = load;

function load() {
    const receipt = new Receipt();
    const form = document.querySelector('form');
    form.addEventListener('submit', () => handleFormSubmission(receipt));
    form.addEventListener('reset', () => resetForm(receipt));

    const order = document.querySelector('pizza-list');
    order.addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
        const remove = document.querySelector('remove-btn');
        remove.setAttribute(id, 'rm-' + id);
    });
    document.querySelector('add-btn').addEventListener('click', () => { });
    document.querySelector('remove-btn').addEventListener('click', e => {
        const id = e.target.id.split('-')[1];
    })
}

function handleFormSubmission() { 
    const size = document.querySelector('[name="size"]:checked').value;
    const sauce = [];
    document.querySelectorAll('[name="sauce"]:checked').forEach(elem => sauce.push(elem.value));
    const cheese = [];
    document.querySelectorAll('[name="cheese"]:checked').forEach(elem => cheese.push(elem.value));
    const veggies = [];
    document.querySelectorAll('[name="veggies"]:checked').forEach(elem => veggies.push(elem.value));
    const protein = [];
    document.querySelectorAll('[name="protein"]:checked').forEach(elem => protein.push(elem.value));
    const qty = document.querySelector('[name="quantity"]').value;

    const pizza = new Pizza(size, sauce, cheese, veggies, protein);
    if (!Object.keys(receipt.pizzas[receipt.currentId].options).length) {
        receipt.pizzas[receipt.currentId].options = pizza;
    }
        
    else {
        // mod pizza;
    }
}

function resetForm(e) {
    console.log(e.target);
}