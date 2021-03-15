let dot = document.querySelector("#dot");
let time = document.querySelector("#time");
const restart = document.querySelector("#restart");
const startBtn = document.querySelector("#start");
let startScore = document.querySelector("#score");

let timer;
let seconds = 10;
let score = 0;

restart.addEventListener("click", ()=>{
    startBtn.style.visibility = "visible";
    dot.style.visibility = "hidden";
    time.textContent = 0;
    clearInterval(timer);
    startScore.textContent = 0;
    startBtn.innerText = `Game Over \n Click to play again`;
    restart.disabled = true;
})

startBtn.addEventListener("click", () => {
    startBtn.style.visibility = "hidden";
    dot.style.visibility = "visible";
    randomPos();
    clearInterval(timer);
    restart.disabled = false;
    countDown();
})

function countDown() {
    seconds = 10;
    time.textContent = seconds;
    score = 0;
    startScore.textContent = 0;
    timer = setInterval(() => {
        seconds--;
        time.textContent = seconds;
        if (time.textContent == 0) {
            window.clearInterval(timer);
            dot.style.visibility = "hidden";
            setTimeout(end, 300);

        }
    }, 1000);
}

 


dot.addEventListener("click", () => {
    randomPos();
    score++;
    startScore.textContent = score;
})

function randomPos (){
    let num1 = Math.floor(Math.random() * 97);
    let num2 = Math.floor(Math.random() * 97);
    dot.style.top = `${num1}%`;
    dot.style.left = `${num2}%`;
    dot.classList.remove("grow");
    void dot.offsetWidth;
    dot.classList.add("grow");

}


function end(){
    
    startBtn.style.visibility = "visible";
    startBtn.innerText = `Score: ${score} \n Click to play again`;
    restart.disabled = true;

}