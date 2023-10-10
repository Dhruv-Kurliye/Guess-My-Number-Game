'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='Not a number';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent='The Number is Correct';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='40rem'
        if(score > highscore){
            highscore=score;
        }
        document.querySelector('.highscore').textContent=highscore;
    }
    else if(guess!==secretNumber){
      if(score >= 1){
        document.querySelector('.message').textContent=guess < secretNumber ? 'Lower number' : 'Higher Number';
        document.querySelector('body').style.backgroundColor= '#FF0000';
        score--;
        //document.querySelector('.message').textContent='You lost the game';
        document.querySelector('.score').textContent=score;
        
      }else{
          document.querySelector('.message').textContent="You lost the game";
      }
    }
})

document.querySelector('.again').addEventListener('click',function(){
  secretNumber=Math.trunc(Math.random()*20)+1;
  score=20;  

    document.querySelector('.message').textContent='Start guessing....';
    document.querySelector('.score').textContent= score;
    document.querySelector('body').style='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').textContent='';
    //document.querySelector('.number').style.width='40rem'
    
})