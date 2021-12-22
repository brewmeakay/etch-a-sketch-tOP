let sliderValue = document.querySelector('#slider-value')
let rangeSlider = document.querySelector('#rangeSlider')
let grid =document.querySelector('#grid')
let currentSliderValue=16;  //default value
createGrid(currentSliderValue);


rangeSlider.oninput = function ()
{
    currentSliderValue = this.value
    sliderValue.innerHTML = `${currentSliderValue} x ${currentSliderValue}`;
    console.log(currentSliderValue)
    clearGrid();
    createGrid(currentSliderValue);
};

function clearGrid()
{
    grid.innerHTML=""
}

function createGrid(dimension)
{
    for(i=0;i<dimension;i++)
    {
        let row_div = document.createElement('div');
        row_div.classList.add('row-div')
        for(j=0;j<dimension;j++)
        {
            let col_div = document.createElement('div')
            col_div.classList.add('col-div')
            row_div.append(col_div);
        }
        grid.append(row_div)
    }
}

