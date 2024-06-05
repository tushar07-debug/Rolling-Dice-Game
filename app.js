let y = 1
let z = 0

// var audio = new Audio('music.mp3');
// audio.play();

// const audio = new Audio('music.mp3');
// audio.play();

let sound=document.getElementById('win');

function createConfetti() {
  const container = document.getElementById('confetti-container');
  const numConfetti = 100; 

  for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(confetti);
  }
}

function roll_dice(){
  let x = Number(Math.floor(Math.random(0,1)*6+1))
  document.getElementById('dice_value').innerHTML = x
  
  if(y%2===0){
    console.log('SpiderMan') 
    let num2 = Number(document.getElementById('p2_score').innerHTML)
    num2 = num2 + x
    document.getElementById('p2_score').innerHTML = num2
    y = 1
    if(num2>=50){
      z = 1
    }
  }
  else{
    console.log('Captain America')
    let num1 = Number(document.getElementById('p1_score').innerHTML)
    num1 = num1 + x
    document.getElementById('p1_score').innerHTML = num1
    y = y + 1
    if(num1>=50){
      z = 1
    }
  }
  if(z===1){
    let num1 = Number(document.getElementById('p1_score').innerHTML)
    let num2 = Number(document.getElementById('p2_score').innerHTML)
    if(num1>num2){
      document.getElementById('result').innerHTML = 'Captain America Won'
      document.getElementById('result').className = 'alert alert-dark'
      document.getElementById('btn1').disabled = true
      createConfetti();
    }
    if(num1<num2){
      document.getElementById('result').innerHTML = ' SpiderMan Won'
      document.getElementById('result').className = 'alert alert-dark'
      document.getElementById('btn1').disabled = true
      createConfetti();
    }
    sound.play();
  }
}