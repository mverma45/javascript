//Random Number Generator
const r = document.querySelector('#rand')
function random() {
    const rand = Math.floor(Math.random() * 20) + 1
    r.innerHTML = `${rand}`
}

const c = document.querySelector('#quote');
function q() {
    alert("IM FREE, I AM FREE HAHAHAHAHAHA, Thank you Thank you! Thank you Lord");
}

//document.getElementById
function changeColor(newColor) {
    let sweet = document.getElementById('clicked');
    sweet.style.color = newColor;

}

function changePic(newPic) {
    let yum = document.getElementsById('pic');
    yum.style.newPic = newPic;
}

//document.querySelector

let waffle = true;
const newImage = document.querySelector('#food')

newImage.onclick = function () {
   
    const food = waffle ? "hamburger" : "waffle"
        newImage.setAttribute('src', `./images/${food}.jpg`);
        
    waffle = !waffle
    
    let mySrc = newImage.getAttribute('src');
    if (mySrc === './images/waffle.jpg') {
        newImage.setAttribute('src', './images/hamburger.jpg');
    } else {
        newImage.setAttribute('src', './images/waffle.jpg')
    }
}

// document.querySelectorAll
const inner = select.querySelectorAll('p')
function find() {
    let x
    let i
    x = document.querySelectorAll('p');
    for (i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "maroon"
        x[i].style.color = "white"
    }    
}

// const inner2 = select.querySelectorAll('p')
// function clear() {
//     let y
//     let z
//     y = document.querySelectorAll('p');
//     for (z = 0; z < y.length; z++){
//         y[z].style.backgroundColor = "white"
//         y[z].style.color = "black"
//     }
// }

const btnClear = document.querySelector('p');

btnClear.addEventListener('click',()=>{
    inner.array.forEach(inner => inner.value='')
});