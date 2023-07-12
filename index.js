const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

// rate
const rate = document.getElementById('rate');
// for swap button
const swap = document.getElementById('swap');

// adevent listener
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);

amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

// get currency name according change the data
async function calculate() {
    const currency_1 = currency_one.value;
    const currency_2 = currency_two.value;

    //   fetch exchangerate API 
    const data = await fetch(` https://v6.exchangerate-api.com/v6/fe8489081686632e436ffc2f/latest/${currency_1}`);
    const response = await data.json();
    console.log(response);

    const rate = response.conversion_rates[currency_2];
    rate.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;

    amount_two.value = (amount_one.value * rate).toFixed(2);




}

swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})











// for Check that work or not

// amount_one.addEventListener('input', () => {
//     console.log(event.target.value)

// })


