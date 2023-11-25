const btn = document.getElementById("button")
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)]
    }
    let ColorName = document.querySelector("h1")
    ColorName.innerText = cons;

    return cons;
};
btn.addEventListener("click", changeRandomolor)


function changeRandomolor() {
    document.body.style.background = randomColor();
}