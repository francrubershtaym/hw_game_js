const start = document.querySelector('.btn');
const figure = document.querySelector('.figur');
const put = document.querySelector('.put');
const desc = document.querySelector('.desc');
const span = document.querySelector('.span');
let count;
const cli = ["circle(50% at 50% 50%)",
    "ellipse(50% 50% at 50% 50%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)", " polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", " polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)"];

function figureCreate() {
    const parent = document.getElementById('block');
    const div = document.createElement('div');
    div.className = 'figure';
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * 400) + "px";
    div.style.top = Math.floor(Math.random() * 400) + "px";
    div.style.right = Math.floor(Math.random() * 400) + "px";
    div.style.bottom = Math.floor(Math.random() * 400) + "px";
    div.style.width = Math.floor(Math.random() * 10) + 40 + "px";
    div.style.height = Math.floor(Math.random() * 10) + 40 + "px";
    div.style.clipPath = cli[Math.floor(Math.random() * cli.length)];
    div.style.backgroundColor = color();
    div.addEventListener("click", () => {
        parent.innerHTML = "";
        count++;

        figureCreate();

    })
    parent.appendChild(div);

}

function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function startGame(){
    let time = parseInt(put.value);
    count = 0
    span.innerHTML = time;
    start.disabled = true;
    figureCreate();
    
     countdown = setInterval(() => {
        time--;
        span.innerHTML = time ;
        if (time <= 0) {
            clearInterval(countdown);
            block.innerHTML = `<h2> Игра окончена! Вы поймали  ${count} фигур</h2>`;

            start.disabled = false;
        }
    }, 1000);
}

start.addEventListener('click', startGame);

