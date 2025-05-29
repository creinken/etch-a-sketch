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
                pixel.style.background = 'hsla(0, 0.00%, 0.00%, 0.50)';
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