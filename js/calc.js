var clickOnNumber = document.querySelectorAll(".number-click span");
var screenCalc = document.querySelector("#calc-number");
clickOnNumber.forEach(function (num) {
    num.addEventListener("click", function () {
        if (num.classList[0] === "del") {
            var re = Array.from(screenCalc.value);
            re.pop();
            screenCalc.value = re.join("");
        }
        else if (num.classList[0] === "reset") {
            screenCalc.value = "";
        }
        else {
            screenCalc.value += num.innerHTML;
        }
    });
});
document.addEventListener("keydown", function (e) {
    var numS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var remarkS = ["/", "*", "-", "+", "."];
    numS.forEach(function (num) {
        if (num === +e.key) {
            screenCalc.value += num;
        }
        else {
            return;
        }
    });
    remarkS.forEach(function (mark) { });
    if (e.key === "Backspace") {
        var re = Array.from(screenCalc.value);
        re.pop();
        screenCalc.value = re.join("");
    }
    if (e.key === "Enter") {
        // screenCalc.value = `${+screenCalc.value}`;
        console.log(Number(screenCalc.value));
    }
});
