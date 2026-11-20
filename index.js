let rotation = 0;
let HeadsCount = 0;
let tailsCount = 0;

function flip() {
    let coin = Math.floor(Math.random() * 2);
    let coindiv = document.getElementById("coin");

    rotation += 1800;

    if (coin == 1) {
        console.log("Heads");
        if (rotation % 360 !== 0) rotation += 180;
    } else {
        console.log("tails");
        if (rotation % 360 === 0) rotation += 180;
    }
    coindiv.style.transform = `rotateY(${rotation}deg)`;

    setTimeout(function () {
        if (coin == 1) {
            HeadsCount++;
            document.getElementById("talyheads").innerHTML = HeadsCount;
        } else {
            tailsCount++;
            document.getElementById("talytails").innerHTML = tailsCount;
        }
    }, 1500);
}

function reset() {
    HeadsCount = 0;
    tailsCount = 0;
    document.getElementById("talyheads").textContent = HeadsCount;
    document.getElementById("talytails").textContent = tailsCount;
}