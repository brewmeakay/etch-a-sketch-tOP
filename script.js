let sliderValue = document.querySelector('#slider-value')
let rangeSlider = document.querySelector('#rangeSlider')
let grid = document.querySelector('#grid')
let currentSliderValue = 16;  //default value
createGrid(currentSliderValue);
let colorPicker = document.querySelector('#color-picker');
let resetButton = document.querySelector('#reset-icon');

//looks for changes in rangeSlider
rangeSlider.oninput = function () {
    clearGrid();
    createGrid(this.value);
};

//clears the grid
function clearGrid() {
    grid.innerHTML = ""
}

//create the grid with given dimension
function createGrid(dimension) {
    sliderValue.innerHTML = `${dimension} x ${dimension}`
    for (i = 0; i < dimension; i++) {
        let row_div = document.createElement('div');
        row_div.classList.add('row-div')
        for (j = 0; j < dimension; j++) {
            let col_div = document.createElement('div')
            col_div.classList.add('col-div')
            row_div.append(col_div);
        }
        grid.append(row_div)
    }
}
//sketch function
grid.addEventListener('mouseover', function (e) {
    e.target.classList.add('change-color');
    colorPicker.oninput = function () { }
    e.target.style.backgroundColor = colorPicker.value;
})

//resetbutton
resetButton.addEventListener('click', function () {
    clearGrid();
    createGrid(currentSliderValue);
})
