let range = document.querySelector(".number-theme input") as HTMLInputElement;
let numSRange = document.querySelectorAll(".number-theme div span");
let body = document.querySelector("body") as HTMLBodyElement;
numSRange.forEach((num: any) => {
  num.addEventListener("click", () => {
    range.value = `${num.innerHTML - 1}`;
    body.className = `theme${num.innerHTML}`;
    localS();
  });
});
range.addEventListener("click", () => {
  body.className = `theme${+range.value + 1}`;
  localS();
});
let Data: any;
if (localStorage.theme !== null) {
  Data = JSON.parse(localStorage.theme);
  Data.forEach((data) => {
    body.className = data.theme;
    range.value = `${Array.from(data.theme).reverse()[0] - 1}`;
  });
} else {
  Data = [];
}
console.log();

function localS() {
  console.log(body.className);
  let newData: any = {
    theme: body.className,
  };
  Data.push(newData);
  localStorage.setItem("theme", JSON.stringify(Data));
}

// localStorage
