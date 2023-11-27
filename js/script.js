let allTypes = document.querySelectorAll('.catalog__content')
let allTabs = document.querySelectorAll('.catalog__tab')
function changeItems(kind) {
    allTypes.forEach(product => {
        if (product.className.includes(kind)) {
            product.classList.add('catalog__content_active')
        } else {
            product.classList.remove('catalog__content_active')
        }
    })
    allTabs.forEach(tab => {
        if (tab.className.includes(kind)) {
            tab.classList.add('catalog__tab_active')
        } else {
            tab.classList.remove('catalog__tab_active')
        }
    })
}

let moneyElement = document.querySelector('.earned-money');
let spentElement = document.querySelector('.spent-money');

let EarnedMoney = 0;
let SpentMoney = 0;
document.querySelectorAll('.counter-container').forEach(container => {
    const decrementButton = container.querySelector('.decrement');
    const counterElement = container.querySelector('.counter');
    const incrementButton = container.querySelector('.increment');
    const counterId = container.dataset.counter;

    // Initialize counter value
    counterElement.value = localStorage.getItem(`counter_${counterId}`) || 0;
    const sellPrice = parseInt(localStorage.getItem(`sellPrice_${counterId}`)) || 0;
    const buyPrice = parseInt(localStorage.getItem(`buyPrice_${counterId}`)) || 0;

    EarnedMoney += sellPrice * counterElement.value;
    SpentMoney += buyPrice * counterElement.value;
    
    
    
    decrementButton.addEventListener('click', () => {
        const currentValue = parseInt(counterElement.value);
        if (currentValue > 0) {
            counterElement.value = currentValue - 1;
            localStorage.setItem(`counter_${counterId}`, currentValue - 1);
        }
    });

    incrementButton.addEventListener('click', () => {
        const currentValue = parseInt(counterElement.value);
        counterElement.value = currentValue + 1;
        localStorage.setItem(`counter_${counterId}`, currentValue + 1);
    });
});

moneyElement.innerHTML = `EARNED MONEY: ${EarnedMoney}`
spentElement.innerHTML = `SPENT MONEY: ${SpentMoney}`
document.querySelector('.diff').innerHTML = `DIFFERENT: ${EarnedMoney-SpentMoney}`


document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.getElementById('scrollDownButton');
    const scrollUpButton = document.getElementById('scrollUpButton');

    scrollDownButton.addEventListener('click', function () {
        // Scroll smoothly to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    scrollUpButton.addEventListener('click', function () {
        // Scroll smoothly to the bottom of the page
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: 'smooth'
        });
    });
});


// ADD EVENT LISTENER - sell-price / buy-price

// localStorage.setItem(id, value);
// value = localStorage.getItem(id)

