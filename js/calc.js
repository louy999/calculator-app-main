var clickOnNumber = document.querySelectorAll(".number-click span");
var screenCalc = document.querySelector("#calc-number");
clickOnNumber.forEach(function (num) {
    num.addEventListener("click", function () {
        screenCalc.value += num.innerHTML;
    });
});
document.addEventListener("keydown", function (e) {
    var numS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var remarkS = ["/", "*", "-", "+", "."];
    numS.forEach(function (num) {
        if (num === +e.key) {
            //   screenCalc.value += num.toLocaleString("en-Us");
        }
        else {
            return;
        }
    });
    remarkS.forEach(function (mark) {
        if (mark === e.key) {
            screenCalc.value += mark;
            mark = mark.toLocaleString("en-Us");
        }
        else {
            return;
        }
    });
    // , "Backspace", "Enter"
});
