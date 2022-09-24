let clickOnNumber = document.querySelectorAll(".number-click span");
let screenCalc = document.querySelector("#calc-number") as HTMLInputElement;
clickOnNumber.forEach((num) => {
  num.addEventListener("click", () => {
    if (num.classList[0] === "del") {
      let re = Array.from(screenCalc.value);
      re.pop();
      screenCalc.value = re.join("");
    } else if (num.classList[0] === "reset") {
      screenCalc.value = "";
    } else {
      screenCalc.value += num.innerHTML;
    }
  });
});
document.addEventListener("keydown", (e) => {
  let numS: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let remarkS: any = ["/", "*", "-", "+", "."];
  numS.forEach((num) => {
    if (num === +e.key) {
      screenCalc.value += num;
    } else {
      return;
    }
  });
  remarkS.forEach((mark) => {});
  if (e.key === "Backspace") {
    let re = Array.from(screenCalc.value);
    re.pop();
    screenCalc.value = re.join("");
  }
  if (e.key === "Enter") {
    // screenCalc.value = `${+screenCalc.value}`;
    console.log(Number(screenCalc.value));
  }
});
