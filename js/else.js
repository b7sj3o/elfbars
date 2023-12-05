document.addEventListener("DOMContentLoaded", () => {
    const buyInputValue = document.getElementById("buy-price").value;
    const sellInputValue = document.getElementById("sell-price").value;
    const counterValue = document.getElementById("counter").value;
    const buttonFormSubmit = document.querySelector("#opt-btn");
    const menu = document.getElementById("menu");
    const moneyData = JSON.parse(localStorage.getItem("moneyData")) || [];

 
    function render(){
        menu.innerHTML = "";
        moneyData.forEach((data, index) => {
            menu.innerHTML += `
                <div class="menu__wrapper">
                    <h1 class="earned-money">Загальний оборот: ${data.buy}</h1>
                    <h1 class="spent-money">Чистий дохід: ${data.sell}</h1>
                    <h1 class="diff">Різниця: ${data.counter}</h1>
                    <h1 class="sold-amount">Продано: ${index + 1}</h1>
                </div>`;
        });
    }   
   

    buttonFormSubmit.onclick = (e) => {
        e.preventDefault();
        (buyInputValue == "" || sellInputValue == "" || counterValue == "")
            ? console.log("no needed data")
            : (() => {
                const moneyObject = {
                    buy: buyInputValue,
                    sell: sellInputValue,
                    counter: counterValue
                };
                moneyData.push(moneyObject);
                localStorage.setItem("moneyData", JSON.stringify(moneyData));
                render()
            })();
    }

    render()
});
