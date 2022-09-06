
// sketch pad is 960px wide
// we can create grids using flexbox
//10
let num = 10;
let flexBasis = 100 / num + '%' 
const container = document.querySelector('.sketch-pad')
for (i=0;i<(num*num);i++) {
    let box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)
    box.style.flexBasis = flexBasis;        
    
}

for (let child of container.children) {
    child.addEventListener('mouseenter', () => {
        child.style.backgroundColor = 'lightslategrey';
    })
}

let resetBtn = document.querySelector('.button-container').firstElementChild

resetBtn.addEventListener('click', () => {
    for (let child of container.children) {
        child.style.backgroundColor = 'white';
    }
})


