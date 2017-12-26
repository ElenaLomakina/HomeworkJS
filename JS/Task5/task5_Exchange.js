var cur1, cur2, sum1, sum2;
var rateUSD = 28;
var rateEUR = 33;

var change = {
    "USD": {
        "USD": 1,
        "EUR": rateUSD / rateEUR,
        "UAH": rateUSD
    },
    "EUR": {
        "USD": rateEUR / rateUSD,
        "EUR": 1 ,
        "UAH": rateEUR
    },
    "UAH": {
        "USD": 1 / rateUSD,
        "EUR": 1 / rateEUR,
        "UAH": 1
    }
};

var curNames = Object.keys(change);

function exchange( from, to) {
    return Math.round( change[from][to] * sum1 * 100) / 100;
}

cur1 = prompt("Choose the currency you want to exchange: USD, EUR, UAH");
cur2 = prompt("Choose the currency to which you want to change: USD, EUR, UAH");
sum1 = prompt("Enter your sum");

var isCorrect1 = curNames.some(function(cur){
    return cur1 === cur;
});

var isCorrect2 = curNames.some(function(cur){
    return cur2 === cur;
});

var isCorrect = isCorrect1 && isCorrect2;

if (!isCorrect) {
    alert("Sorry, we can not exchange this currency");
}
else{
    if (isNaN(Number(sum1))) {
        alert("Sum is not a number")
    }
    else{
        sum2 = exchange(cur1, cur2);
        alert( sum1 +" " + cur1 + " is " + sum2 + " " + cur2);
    }
}