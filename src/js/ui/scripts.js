window.onload = load;

function load() {
    const receipt = new Receipt();
    const form = document.querySelector('form');
    form.addEventListener('submit', () => handleFormSubmission(receipt));
    form.addEventListener('reset', () => resetForm(receipt));
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

    const pizza = new Pizza(size, sauce, cheese, veggies, protein);
}

function resetForm(e) {
    console.log(e.target);
}