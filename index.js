const initPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkStockBtn = document.querySelector("#check-stock-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = ((loss / initial) * 100).toFixed(2);
        showOutput(
            `Hey, the loss is ${loss} and the percentage is ${lossPercentage}%`,
            "LOSS"
        );
    } else if (initial < current) {
        let profit = (current - initial) * quantity;
        let profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput(
            `Hey, the profit is ${profit} and the percentage is ${profitPercentage}%`,
            "PROFIT"
        );
    } else {
        showOutput("No pain no gain and no gain no pain.", "NO_GAIN");
    }
}

function showOutput(message, status) {
    switch (status) {
        case "PROFIT":
            output.innerText = message;
            output.style = "color: #0ed10e; border: 1px solid #0ed10e; background: #fffffe"
            break;

        case "LOSS":
            output.innerText = message;
            output.style = "color: red; border: 1px solid red; background: #fffffe"
            break;

        case "NO_GAIN":
            output.innerText = message;
            output.style = "color: #0f0e17; border: 1px solid #0f0e17; background: #fffffe"
            break;

        case "NO_VALUE":
            output.innerText = message;
            output.style = "color: #0f0e17; border: 1px solid #0f0e17; background: #fffffe"
            break;

        default:
            break;
    }
}

function handleClick() {
    const init = Number(initPrice.value);
    const qnt = Number(stockQuantity.value);
    const current = Number(currentPrice.value);
    if (init && qnt && current) {
        calculateProfitAndLoss(init, qnt, current);
    } else {
        showOutput("Please enter value in all fileds.", "NO_VALUE");
    }
}

checkStockBtn.addEventListener("click", handleClick);
