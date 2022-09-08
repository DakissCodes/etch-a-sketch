// PROJECT GOALS
// - Ability to change color of each box with any color
// - Ability to change sketch pad size
// - Add an eraser mode
// - Add a rainbow mode
let num = 50;
let flexBasis = 100 / num + '%' 
const container = document.querySelector('.sketch-pad')
let color = 'black'
for (i=0;i<(num*num);i++) {
    // creates divs and appends to sketchpad
    let box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)
    box.style.flexBasis = flexBasis;        
}

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
    console.log('reset clicked')
    for (let child of container.children) {
        child.style.backgroundColor = color;
        
    }
    if (eraserClicked == true) {
        eraserBtn.style.backgroundColor = 'lightslategrey';
        eraserClicked= false;
    } 


    color = lastColor;
})


let eraserBtn = document.getElementById('eraser').firstElementChild
let lastColor = 'black';
eraserClicked= false;
function eraserEnabled(event) {
    if (eraserClicked == true) {
        console.log('second click')
        eraserClicked = false;
        color = lastColor;
        event.target.style.backgroundColor = 'lightslategrey'
    } else {
        color = 'white';
        event.target.style.backgroundColor = 'grey' 
        eraserClicked = true;
        
    }
}

eraserBtn.addEventListener('click', eraserEnabled)

// color picker input

let colorPicker = document.getElementById('box-color')
console.log(colorPicker)
colorPicker.addEventListener('input', (event) => {
    console.log(event.target.value)
    color = event.target.value;
    lastColor = event.target.value;
})

// rainbow mode

rainbowClicked = false;
let rainbowBtn = document.getElementById('rainbow-mode').firstElementChild;
console.log(rainbowBtn)
function mousePos(event) {
    console.log(event.clientX)
}
function rainbowEnabled(event) {
    console.log(event)
   if (rainbowClicked == true) {
        container.removeEventListener('mousemove',mousePos)
        color = lastColor;
        event.target.style.backgroundColor = 'lightslategrey' 
        rainbowClicked = false;
   } else {
        console.log('clicked!')
        event.target.style.backgroundColor = 'grey';
        rainbowClicked = true ;
        container.addEventListener('mousemove', mousePos)
    
   }
}
rainbowBtn.addEventListener('click', rainbowEnabled)