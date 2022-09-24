var range = document.querySelector(".number-theme input");
var numSRange = document.querySelectorAll(".number-theme div span");
var body = document.querySelector("body");
numSRange.forEach(function (num) {
    num.addEventListener("click", function () {
        range.value = "".concat(num.innerHTML - 1);
        body.className = "theme".concat(num.innerHTML);
        localS();
    });
});
range.addEventListener("click", function () {
    body.className = "theme".concat(+range.value + 1);
    localS();
});
var Data;
if (localStorage.theme !== null) {
    Data = JSON.parse(localStorage.theme);
    Data.forEach(function (data) {
        body.className = data.theme;
        range.value = "".concat(Array.from(data.theme).reverse()[0] - 1);
    });
}
else {
    Data = [];
}
console.log();
function localS() {
    console.log(body.className);
    var newData = {
        theme: body.className
    };
    Data.push(newData);
    localStorage.setItem("theme", JSON.stringify(Data));
}
// localStorage
