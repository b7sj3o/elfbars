document.addEventListener("DOMContentLoaded", () => {
    const buyInputValue = document.getElementById("buy-price");
    const sellInputValue = document.getElementById("sell-price");
    const counterValue = document.getElementById("counter");
    const buttonFormSubmit = document.querySelector("#opt-btn");
    const menu = document.getElementById("dopMenu");
    const moneyData = JSON.parse(localStorage.getItem("moneyData")) || [];

 
    function render(){
        moneyData.forEach((data, index) => {
            menu.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <div class="catalog-item__content catalog-item__content_active">
                            <div class="counter-container" data-counter="${index+46}">
                                <label for="">Закупочна ціна</label>
                                <input class="buy-price form-control" value="${data.buy}"></input>
                                <hr>
                                <label for="">Продажна ціна</label>
                                <input class="sell-price form-control" value="${data.sell}"></input>
                                <hr>
                                <div class="inputs-pm">
                                    <button class="decrement">-</button>
                                    <input class="counter form-control" type="number" value="${data.counter}"></input>
                                    <button class="increment">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                // localStorage.setItem(`buyPrice_${index + 46}`, buyInputValue.value) 
                // localStorage.setItem(`sellPrice_${index + 46}`, sellInputValue.value) 
                // localStorage.setItem(`counter_${index + 46}`, counterValue.value) 
        });
    }   
   

    buttonFormSubmit.onclick = (e) => {
        e.preventDefault();
        (buyInputValue.value === "" || sellInputValue.value === "" || counterValue.value === "")
            ? console.log("no needed data")
            : (() => {
                console.log(buyInputValue.value)
                const moneyObject = {
                    buy: buyInputValue.value,
                    sell: sellInputValue.value,
                    counter: counterValue.value
                };
                moneyData.push(moneyObject);
                localStorage.setItem("moneyData", JSON.stringify(moneyData));
                render()
            })();
    }

    render()
});
