let teaCount = 0;
        let coffeeCount = 0;
        let HorlicsCount = 0;
        let milkCount = 0;

        const teaPrice = 10;
        const coffeePrice = 15;
        const HorlicsPrice = 25;
        const milkPrice = 20;


        function add() {
            const selectDrink = document.querySelector('input[name="drink"]:checked');
            if (selectDrink) {
                const drinkType = selectDrink.value;
                if (drinkType === 'tea') {
                    teaCount++;
                    document.getElementById("tc").textContent = "Tea Count: " + teaCount;
                } else if (drinkType === 'coffee') {
                    coffeeCount++;
                    document.getElementById("cc").textContent = "Coffee Count: " + coffeeCount;
                } else if (drinkType === 'Horlics') {
                    HorlicsCount++;
                    document.getElementById("hc").textContent = "Horlics Count: " + HorlicsCount;
                } else if (drinkType === 'milk') {
                    milkCount++;
                    document.getElementById("mc").textContent = "Milk Count: " + milkCount;
                }
            }
        }
        function TotalBill() {
            const total = (teaCount * teaPrice) + (coffeeCount * coffeePrice) + (HorlicsCount * HorlicsPrice) + (milkCount * milkPrice);
            document.getElementById("total").textContent = "Total: " + total;
        }