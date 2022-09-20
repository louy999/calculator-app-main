let clickOnNumber = document.querySelectorAll(".number-click span");
let screenCalc = document.querySelector("#calc-number") as HTMLInputElement;
clickOnNumber.forEach((num) => {
  num.addEventListener("click", () => {
    screenCalc.value += num.innerHTML;
  });
});
document.addEventListener("keydown", (e) => {
  let numS: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let remarkS: any = ["/", "*", "-", "+", "."];
  numS.forEach((num) => {
    if (num === +e.key) {
      //   screenCalc.value += num.toLocaleString("en-Us");
    } else {
      return;
    }
  });
  remarkS.forEach((mark) => {
    if (mark === e.key) {
      screenCalc.value += mark;
      mark = mark.toLocaleString("en-Us");
    } else {
      return;
    }
  });
  // , "Backspace", "Enter"
});
