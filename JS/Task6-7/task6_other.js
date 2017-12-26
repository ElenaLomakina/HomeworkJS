// Расширить конструктор числа. По вызову метода будет запрос на указание валюты, к которой это число относится
// и в какую валюту перевести. Возвращаемое значение - конвертированная валюта.





Number.prototype.exchange = function () {
    var from = prompt("Choose the currency you want to exchange: USD, EUR, UAH");
    var to = prompt("Choose the currency to which you want to change: USD, EUR, UAH");
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
    var isCorrect1 = curNames.some(function(cur){return from === cur;});
    var isCorrect2 = curNames.some(function(cur){return to === cur;});
    var isCorrect = isCorrect1 && isCorrect2;
    if (!isCorrect) {
        alert("Sorry, we can not exchange this currency");
    }
    else {
        return Math.round( change[from][to] * this * 100) / 100;
    }
};

//
// var sum1 = Number(prompt("Enter your sum"));
// alert( sum1.exchange());


//     Расширить конструктор объекта методом, который позволит сравнивать текущее значение со значением, передаваемым в аргументе.

Object.prototype.equal = function (val) {
    return this === val;
};

var obj1 = Object();
var obj2 = obj1;
var obj3 = Object();

alert(obj1.equal(obj2));
alert(obj1.equal(obj3));


//     Расширить конструктор массива методом, переводящим все значения в числа.                                     ???

Array.prototype.toNumber = function () {
   return this.forEach(function (value) {
          return isNaN(value)? 0: Number(value);
        })
};

var A = Array("1", "2", 3, "4");
console.log(A.toNumber());