  /* exchange estimator */

/* exchange estimator */

function convert() {

  const inputElement = document.querySelector('.left-input');
  const pi = Number(inputElement.value);

  if (pi >= 1) {

    const msape = pi * 128; // current market price

    const mpesa = document.querySelector('.right-input');
    mpesa.textContent = msape.toLocaleString();

    const color = document.querySelector('.converter-box');
    color.classList.add('converted-box');

    // output on screen
    const priceView = document.querySelector('.pi-estimation');
    priceView.textContent = msape.toLocaleString();

    // save value in localStorage
    localStorage.setItem("piValue", msape);

  }

}

function loadSavedValue() {

  const saved = localStorage.getItem("piValue");

  if (saved) {
    document.querySelector(".balance").textContent =
      Number(saved).toLocaleString();
  }

}

window.onload = loadSavedValue;






const text = document.querySelector('.emp2')

let toggle = false

setInterval(() => {

  if(toggle){
    text.textContent = "-- Conversion Ready --"
  } else {
    text.textContent = "-- Minimum pi you can convert is 100Pi --"
  }

  toggle = !toggle

}, 3000)


function conversion() {
  let priceView=document.querySelector('.pi-estimation')
 
}  



function adDition() {
 let nums=document.querySelector('.num-count')
 let current=Number(nums.innerHTML)
 newReading=current += 1

 nums.innerHTML=newReading
}