count = 0; 

const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

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