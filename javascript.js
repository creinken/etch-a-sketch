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
                pixel.style.backgroundColor = setHslaColor(pixel);
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

function getRgbaColor(element) {
    const partsString = element.style.backgroundColor.slice(5, -1).split(',');
    console.log(partsString);
    if (partsString.length == 3) {
        return [parseInt(partsString[0]), parseInt(partsString[1]), parseInt(partsString[2])];
    } else {
        return [parseInt(partsString[0]), parseInt(partsString[1]), parseInt(partsString[2]), cleanFloat(partsString[3])];
    }
}

function setHslaColor(element) {
    let color = getRgbaColor(element);
    let hsla;

    if (color[3] > 0 && color[3] < 1){
        hsla = rgbToHsl(color[0], color[1], color[2], (cleanFloat(color[3]) + .1));
        console.log(hsla);
        return hsla;
    } else if (color[3] == 1) {
        hsla = rgbToHsl(color[0], color[1], color[2], 1);
        return hsla;
    } else {
        let hue = Math.floor(Math.random() * 360);
        let sat = (Math.random() * 100);
        let light = (Math.random() * 100);
        hsla = `hsla(${hue}, ${sat}%, ${light}%, 0.1)`;
        return hsla;
    }
}

function rgbToHsl(r, g, b, a) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

    if (a !== undefined) {
        return `hsla(${h}, ${s}%, ${l}%, ${a})`
    } else {
        return `hsla(${h}, ${s}%, ${l}%, 1)`;
    }
}

function cleanFloat(floatString) {
    let number = parseFloat(floatString);

    return (Math.ceil(Math.floor(number * 100) / 10) / 10);
}