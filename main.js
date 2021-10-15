//Random Number Generator
const r = document.querySelector('#rand')
function random() {
    const rand = Math.floor(Math.random() * 20) + 1
    r.innerHTML = `${rand}`
}

//document.getElementById
function changeColor(newColor) {
    let sweet = document.getElementById('clicked');
    sweet.style.color = newColor;
    console.log('it works HAHAHAHA')
}

function changePic(newPic) {
    let yum = document.getElementsById('pic');
    yum.style.newPic = newPic;
}

//document.querySelector
let newImage = document.querySelector('img');

newImage.onclick = function () {
    let mySrc = newImage.getAttribute('src');
    if (mySrc === '../JavaScript/waffle.jpg') {
        newImage.setAttribute('src', '../JavaScript/hamburger.jpg');
    } else {
        newImage.setAttribute('src', '../JavaScript/waffle.jpg')
        console.log('it worked')
    }
}


// document.querySelectorAll
// const inner = select.querySelectorAll('p')
function find() {
    let x
    let i
    x = document.querySelectorAll('p');
    for (i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "blue"
    }
}

