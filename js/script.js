let moneyElement = document.querySelector('.earned-money');
let spentElement = document.querySelector('.spent-money');
let difference = document.querySelector('.diff');
let soldAmountTag = document.querySelector('.sold-amount');
let saveDataBtn = document.querySelectorAll('.save_data');

let EarnedMoney = 0;
let SpentMoney = 0;
let soldAmount = 0;
document.querySelectorAll('.counter-container').forEach(container => {
    const decrementButton = container.querySelector('.decrement');
    const counterElement = container.querySelector('.counter');
    const incrementButton = container.querySelector('.increment');
    const counterId = container.dataset.counter;

    const sellPriceInput = container.querySelector('.sell-price');
    const buyPriceInput = container.querySelector('.buy-price');

    sellPriceInput.value = localStorage.getItem(`sellPrice_${counterId}`) || 0;
    buyPriceInput.value = localStorage.getItem(`buyPrice_${counterId}`) || 0;

    
    // Initialize counter value
    counterElement.value = localStorage.getItem(`counter_${counterId}`) || 0;

    soldAmount += Number(counterElement.value);

    EarnedMoney += sellPriceInput.value * counterElement.value;
    SpentMoney += buyPriceInput.value * counterElement.value;
    
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

    saveDataBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            localStorage.setItem(`sellPrice_${counterId}`, sellPriceInput.value)
            localStorage.setItem(`buyPrice_${counterId}`, buyPriceInput.value)
            localStorage.setItem(`counter_${counterId}`, counterElement.value)
            location.reload()
        });
    })
    
});

moneyElement.innerHTML = `Загальний оборот: ${EarnedMoney}₴`
spentElement.innerHTML = `Чистий дохід: ${EarnedMoney-SpentMoney}₴`
difference.innerHTML = `Різниця: ${SpentMoney}₴`;
soldAmountTag.innerHTML = `Продано: ${soldAmount} шт`;


document.addEventListener('DOMContentLoaded', function () {
    const scrollDownButton = document.getElementById('scrollDownButton');
    const scrollUpButton = document.getElementById('scrollUpButton');

    scrollDownButton.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    scrollUpButton.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: 'smooth'
        });
    });
});


function clearData() {
    localStorage.clear();
    location.reload();
}

function reloadData() {
    location.reload();
}

function clearAmount() {
    document.querySelectorAll('.counter-container').forEach(container => {
        localStorage.removeItem(`counter_${container.dataset.counter}`)
    })
    location.reload();
}