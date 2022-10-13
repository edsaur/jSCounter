let decrease = document.querySelector(".decrease-number");
let reset = document.querySelector(".reset-number");
let increase = document.querySelector(".increase-number");

// add an event to the decrease button
decrease.addEventListener("click", ()=> {
    let decreasedNum = document.querySelector("#number");
    decreasedNum.textContent--
    decreasedNum.style.color = "red"
})

increase.addEventListener("click", ()=> {
  let increaseNum = document.querySelector("#number");
  increaseNum.textContent++;
  increaseNum.style.color = "green"
});

reset.addEventListener("click", ()=> {
  let resetNum = document.querySelector("#number");
  resetNum.textContent = 0
  resetNum.style.color = "black"
})