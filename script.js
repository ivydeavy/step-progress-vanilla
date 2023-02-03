let steps = document.querySelectorAll('.steps');
let progressBar = document.querySelector(".progress-bar");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

let counter = 1;
prevBtn.addEventListener("click", () => {
    if(counter >= 1){
        counter--;
    }
    else{
        counter = 1;
    }
    disableBtn();
    updateBar();
})

nextBtn.addEventListener("click", () => {
    if(counter <= steps.length){
        counter++;
    }
    else{
        counter = steps.length;
    }
    disableBtn();
    updateBar();
})

function disableBtn(){
    if(counter === 1){
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }
    else if(counter === steps.length){
        prevBtn.disabled = false;
        nextBtn.disabled = true;
    }
    else{
        prevBtn.disabled = false;
        nextBtn.disable = false;
    }
    
}

function updateBar(){
    steps.forEach((element, idx) => {
        if(counter > idx){
            element.classList.add("active")
        }
        else{
            element.classList.remove("active")
        }
    })
    progressBar.style.cssText = `width: ${((counter - 1)/(steps.length - 1)) * 100}%;`
   
}