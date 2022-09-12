const elements = document.querySelectorAll(".divBox");
const btn = document.querySelector(".btn");
const span = document.querySelectorAll(".color");

function ColorPicker() {
    let color = "#";
    color += Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

btn.addEventListener("click", function () {
    let color;
    for (let i = 0; i < elements.length; i++) {
        color = ColorPicker();
        elements[i].style.transition = "all 1s";
        elements[i].style.backgroundColor = color;
        span[i].innerHTML = color;
    }
})
for (let j = 0; j < elements.length; j++) {
    span[j].addEventListener("click", function () {
        navigator.clipboard.writeText(span[j].innerHTML);
        alert("Kolor skopiowany!");
    })
}
