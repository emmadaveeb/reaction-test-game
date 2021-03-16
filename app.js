let dot = document.querySelector("#dot");
let time = document.querySelector("#time");
const resetBtn = document.querySelector("#restart");
const startBtn = document.querySelector("#start");
let startScore = document.querySelector("#score");

let timer;
let seconds = 60;
let score = 0;

resetBtn.addEventListener("click", ()=>{
    end("Start");
})

startBtn.addEventListener("click", () => {
    startBtn.style.visibility = "hidden";
    dot.style.visibility = "visible";
    randomPos();
    clearInterval(timer);
    resetBtn.disabled = false;
    countDown();
})

function countDown() {
    seconds = 60;
    time.textContent = seconds;
    score = 0;
    startScore.textContent = 0;
    timer = setInterval(() => {
        seconds--;
        time.textContent = seconds;
        if(time.textContent == 0) {
            
            end(`Score: ${score} \n Click to play again`);
        }
    }, 1000);
}
 

dot.addEventListener("click", () => {
    randomPos();
    score++;
    startScore.textContent = score;
})

function randomPos (){
    let num1 = Math.floor(Math.random() * 96);
    let num2 = Math.floor(Math.random() * 96);
    dot.style.top = `${num1}%`;
    dot.style.left = `${num2}%`;
    dot.classList.remove("grow");
    void dot.offsetWidth;
    dot.classList.add("grow");

}


function end(str){
    startBtn.innerText = str;
    startBtn.style.visibility = "visible";
    dot.style.visibility = "hidden";
    resetBtn.disabled = true;
    clearInterval(timer);
    startScore.textContent = 0;
    time.textContent = 0;
    resetBtn.disabled = true;
}

