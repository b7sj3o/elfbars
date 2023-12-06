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
                    <div class="catalog__opt">
                        <div class="counter-container catalog-items-opt w-100" data-counter="${index+47}">
                            <div class="catalog-item-opt">
                                <label for="">Закупочна ціна</label>
                                <input class="buy-price form-control" value="${data.buy}"></input>
                            </div>
                            <div class="catalog-item-opt">
                                <label for="">Продажна ціна</label>
                                <input class="sell-price form-control" value="${data.sell}"></input>
                            </div>
                            <div class="catalog-item-opt">
                                <label for="" style="margin-left: 45px;">Кількість</label>
                                <div class="inputs-pm">
                                    <button class="decrement">-</button>
                                    <input class="counter form-control" type="number" value="${data.counter}"></input>
                                    <button class="increment">+</button>
                                </div>
                            </div>
                            
                        </div>
                    </div><hr>`
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
