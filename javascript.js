function createBoard(gridWidth = 16) {
    let container = document.querySelector('.container');
    let measure = 800 / gridWidth;

    for (let i = 0; i < gridWidth; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let y = 0; y < gridWidth; y++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.style.height = measure + 'px';
            pixel.style.width = measure + 'px';
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

createBoard();