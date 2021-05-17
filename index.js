const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
  
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click',startColorChange);
stopBtn.addEventListener('click', stopColorChange);

  const INTERVAL_DELAY = 1000;
  let intervalID = null; 


  function changeBackground(color) {
  document.body.style.backgroundColor = color;
  }
 
  function startColorChange() {
    intervalID = setInterval(randomNumber => {
      randomNumber = randomIntegerFromInterval(0, 5);
      changeBackground(colors[randomNumber]);
    }, INTERVAL_DELAY);
   
    startBtn.setAttribute('disabled', true);
  }
  function stopColorChange() {
    clearInterval(intervalID);
    startBtn.removeAttribute('disabled');
   
  }