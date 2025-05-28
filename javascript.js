function createBoard(gridWidth = 16) {
    container = document.querySelector('.container');

    for (let i = 0; i < gridWidth; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let y = 0; y < gridWidth; y++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

createBoard();