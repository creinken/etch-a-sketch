let button = document.querySelector("button");
let container = document.querySelector('.container');

button.onclick = newGridClicked;

createBoard();

function createBoard(gridWidth = 16) {
    let measure = 800 / gridWidth;

    for (let i = 0; i < gridWidth; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let y = 0; y < gridWidth; y++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.style.height = measure + 'px';
            pixel.style.width = measure + 'px';
            pixel.addEventListener("mouseenter", (e) => {

                pixel.style.backgroundColor = setHslaColor();
            });
            
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

function newGridClicked() {
    let size = prompt("Please enter a new grid size. Max of 100.");
    if (size > 100) {
        newGridClicked();
    } else {
        container.innerHTML = '';
        createBoard(size);
    }
    return;
}

function getHslaColor(element) {
    const style = window.getComputedStyle(element);
    const backgroundColor = style.backgroundColor;
    const parts = backgroundColor.slice(5, -1).split(',');
    return parts;
}

function setHslaColor() {
    let hue = Math.floor(Math.random() * 360);
    let sat = Math.floor(Math.random() * 100);
    let light = Math.floor(Math.random() * 100);
    let hsla = `hsla(${hue}, ${sat}%, ${light}%, 0.5)`;

    console.log(hsla);
    return hsla;
}