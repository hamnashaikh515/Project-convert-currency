const currency = {
    USD : 1,
    EUR : 0.94,
    GBP : 0.79,
    INR : 84.41,
    PKR : 276.46 
}

document.getElementById('converter-form').addEventListener('submit', function(e) {e.preventDefault();
    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value

    let fromAmount = currency[fromCurrency]
    let toAmount = currency[toCurrency]
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    document.getElementById('result').textContent = `Converted Amount : ${Math.round(convertedAmount)}`
})

