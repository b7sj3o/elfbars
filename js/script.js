let allTypes = document.querySelectorAll('.catalog__content')
let allTabs = document.querySelectorAll('.catalog__tab');
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
let difference = document.querySelector('.diff');
let soldAmountTag = document.querySelector('.sold-amount');

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

    // incrementButton.addEventListener('click', () => {
    //     const currentValue = parseInt(counterElement.value);
    //     counterElement.value = currentValue + 1;
    //     localStorage.setItem(`counter_${counterId}`, currentValue + 1);
    // });

    // sellPriceInput.addEventListener('change', () => {
    //     console.log(sellPriceInput.value)
    //     localStorage.setItem(`sellPrice_${counterId}`, sellPriceInput.value)
        
    // });

    // buyPriceInput.addEventListener('change', () => {
    //     console.log(buyPriceInput.value)
    //     localStorage.setItem(`buyPrice_${counterId}`, buyPriceInput.value)
    // });
    
    // counterElement.addEventListener('change', () => {
    //     localStorage.setItem(`counter_${counterId}`, counterElement.value)
    // });
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