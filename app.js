//Random Number Generator
// const r = document.querySelector('#rand')
// function random() {
//     const rand = Math.floor(Math.random() * 20) + 1
//     r.innerHTML = `${rand}`
// }

// const c = document.querySelector('#quote');
// function q() {
//     alert("IM FREE, I AM FREE HAHAHAHAHAHA, Thank you Thank you! Thank you Lord");
// }

//document.getElementById
// function changeColor(newColor) {
//     let sweet = document.getElementById('clicked');
//     sweet.style.color = newColor;
// }

// function bg(){
// document.body.style.backgroundColor = 'grey'
// }

// function changePic(newPic) {
//     let yum = document.getElementsById('pic');
//     yum.style.newPic = newPic;
// }

//document.querySelector

// let waffle = true;
// const newImage = document.querySelector('#food')

// newImage.onclick = function () {
   
//     const food = waffle ? "hamburger" : "waffle"
//         newImage.setAttribute('src', `./images/${food}.jpg`);
        
//     waffle = !waffle
    
//     let mySrc = newImage.getAttribute('src');
//     if (mySrc === './images/waffle.jpg') {
//         newImage.setAttribute('src', './images/hamburger.jpg');
//     } else {
//         newImage.setAttribute('src', './images/waffle.jpg')
//     }
// }

// document.querySelectorAll
// const inner = select.querySelectorAll('p')
// function find() {
//     let x
//     let i
//     x = document.querySelectorAll('p');
//     for (i = 0; i < x.length; i++){
//         x[i].style.backgroundColor = "maroon"
//         x[i].style.color = "white"
//     }    
// }

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

// const btnClear = document.querySelector('p');

// btnClear.addEventListener('click',()=>{
//     inner.array.forEach(inner => inner.value='')
// });

let userName = 'Manny';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello`);

const userQuestion = 'Will I become rich tonight?'

const randomNumber = Math.floor(Math.random()*8);

console.log(`The question was asked: ${userQuestion} by ${userName}, EightBall ${randomNumber}`); 


let eightBall = '';

if (randomNumber === 0) {
    console.log('YES YES YES')
} else if (randomNumber === 1) {
  console.log('It is certain')
} else if (randomNumber === 2 ) {
  console.log('It is decidedly so')
} else if (randomNumber === 3 ) {
  console.log('Reply hazy try again')
} else if (randomNumber === 4) {
  console.log('Cannot predict now')
} else if (randomNumber === 5){
  console.log('Do not count on it')
} else if (randomNumber === 6){
  console.log('My sources say no')
} else if (randomNumber === 7){
  console.log('Outlook no so good')
} else if (randomNumber === 8 ){
  console.log('Signs point to yes')
}