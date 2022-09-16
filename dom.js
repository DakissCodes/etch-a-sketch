// PROJECT GOALS
// - Ability to change color of each box with any color
// - Ability to change sketch pad size
// - Add an eraser mode
// - Add a rainbow mode
// let num = 50;
// let flexBasis = 100 / num + '%' 
const container = document.querySelector('.sketch-pad')
let color = 'black'
let num = 16;
let flexBasis = 100 / num + '%'




function changeDivColor(event) {
    event.target.style.backgroundColor = color;
}

for (let child of container.children) {
    // individually change box color
    child.addEventListener('click', changeDivColor)
}

container.addEventListener('mousedown', (event) => {
    // changes color on hover when mousedown
    event.preventDefault();
    for (let child of container.children) {
        child.addEventListener('mouseenter', changeDivColor)
    }

})

container.addEventListener('mouseup', (event)=> {
    event.preventDefault();
    for (let child of container.children) {
        child.removeEventListener('mouseenter', changeDivColor)
    }
        
})

container.addEventListener('mouseleave', () => {
    // change color on hover resets when mouse leaves
    for (let child of container.children) {
        child.removeEventListener('mouseenter', changeDivColor)
    }
})


let resetBtn = document.getElementById('reset').firstElementChild





// reset button

resetBtn.addEventListener('click', () => {
    color = 'white'
    for (let child of container.children) {
        child.style.backgroundColor = color;
        
    }
    if (eraserEnabled == true) {
        eraserBtn.style.backgroundColor = 'lightslategrey';
        eraserEnabled= false;
    } 


    color = lastColor;
})


let eraserBtn = document.getElementById('eraser').firstElementChild

// eraser button should override everything

let lastColor = 'black';
eraserEnabled = false;
function eraserMode(event) {
    if (eraserEnabled == false) {
        if (glitterEnabled) {
            glitterEnabled = true;
            glitterBtn.click()
            // remove event listener
        }
        color = 'white';
        event.target.style.backgroundColor = 'grey' 
        eraserEnabled = true;
    } else if (eraserEnabled == true) {
        eraserEnabled = false;
        color = lastColor;
        event.target.style.backgroundColor = 'lightslategrey'
        
    }
}
eraserBtn.addEventListener('click', eraserMode)

// color picker input

let colorPicker = document.getElementById('box-color')
colorPicker.addEventListener('input', (event) => {
    color = event.target.value;
    lastColor = event.target.value;
    if (glitterEnabled) {
        glitterEnabled = true;
        glitterBtn.click()
    } else if (eraserEnabled) {
        eraserEnabled = true;
        eraserBtn.click()
    }
    
})

// glitter mode

glitterEnabled = false;
let glitterBtn = document.getElementById('glitter-mode').firstElementChild;

function mousePos(event) {
    let colorOne = Math.floor(Math.random() * 1000)
    let colorTwo = Math.floor(Math.random() * 1000)
    let colorThree = Math.floor(Math.random() * 1000)
        

    color = `rgb(${colorOne},${colorTwo},${colorThree})`
}

function glitterMode(event) {

    if (glitterEnabled == false) {
        if (eraserEnabled) {
            eraserEnabled = true;
            eraserBtn.click();
        }
        event.target.style.backgroundColor = 'grey';
        glitterEnabled = true ;
        container.addEventListener('mousemove', mousePos)
        
    } else if (glitterEnabled == true) {
        container.removeEventListener('mousemove',mousePos)
        color = lastColor;
        event.target.style.backgroundColor = 'lightslategrey' 
        glitterEnabled = false;
        
    }
}

glitterBtn.addEventListener('click', glitterMode)


// fill mode 

let fillCanvas = document.getElementById('canvas-color') 
fillCanvas.addEventListener('input', (event) => {
    for (let child of container.children) {
        child.style.backgroundColor = event.target.value
    }
})

// grid slider


let gridSlider = document.querySelector('.slider').firstElementChild

gridSlider.addEventListener('input', (event) => {
    console.log(event.target.value)
    let firstChild = container.firstElementChild;
    while (firstChild) {
        firstChild.remove();
        firstChild = container.firstElementChild;
        // removes all child
        
    }
    
    num = event.target.value
    flexBasis = 100 / num + '%'

    for (i=0;i<(num*num);i++) {
        // creates divs and appends to sketchpad
        let box = document.createElement('div')
        box.className = 'box'
        container.appendChild(box)
        box.style.flexBasis = flexBasis;        
}

})


for (i=0;i<(num*num);i++) {
    // creates divs and appends to sketchpad
    box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)
    box.style.flexBasis = flexBasis;        
}