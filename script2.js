count = 0; 

const value = document.querySelector("#number");
const value2 = document.querySelector("#number-2")
const btns = document.querySelectorAll(".btn-1");
const btns2 = document.querySelectorAll(".btn-2")

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
    if(styles.contains("decrease-number")){
        count--;
    }else if (styles.contains("increase-number")){
        count++;
    } else if (styles.contains("decrease-by-twos")) {
        count-=2;
    } else if (styles.contains("increase-by-twos")) {
        count+=2;
    } else {
        count = 0
    }
    if(count > 0) {
        value.style.color = "green";
    }
    if(count < 0) {
        value.style.color = 'red';
    }
    if(count === 0) {
        value.style.color = "#222"
    }
    value.textContent = count;
    });
});

count2 = 0

btns2.forEach((btn2) => {
    btn2.addEventListener('click', (e) => {
        const styles2 = e.currentTarget.classList;
    if(styles2.contains("decrease-number-2")){
        count2--;
    }else if (styles2.contains("increase-number-2")){
        count2++;
    } else if (styles2.contains("decrease-by-twos-2")) {
        count2-=2;
    } else if (styles2.contains("increase-by-twos-2")) {
        count2+=2;
    } else {
        count2 = 0;
    }
    if(count2 > 0) {
        value2.style.color = "green";
    }
    if(count2 < 0) {
        value2.style.color = 'red';
    }
    if(count2 === 0) {
        value2.style.color = "#222"
    }
    value2.textContent = count2;
    });
});