var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();


//console.log(dice);

//document.querySelector('#current-' +activePlayer).textContent = dice;
// text content just put the text. but innerhtml put also html. We can also store the value of textContent in a veriable.

//document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>';



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        
        //2. Display the result.
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        /*
        if(dice === 6 && lastDice === 6 ){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();   
        }
        //3. Update the round score if the rolled number was not a 1
        if(dice !== 1){
            // add score
            roundScore += dice;
            document.querySelector('#current-' +activePlayer).textContent = roundScore;
        }
        else{

            //next player
            nextPlayer();
    //        document.querySelector('.player-0-panel').classList.remove('active');
    //        document.querySelector('.player-1-panel').classList.add('active');
        }
        lastDice = dice;
        */
        if(dice1 !== 1 && dice2 !== 1){
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' +activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlaying){
    // Add current score to global score.
    scores[activePlayer] += roundScore;
    
   // Update the UI
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
       
       var input = document.querySelector('.final-score').value;
       // Undefined, 0, null or "" are COERCED to false
       // Anything else is COERCED to true
       if(input){
           var winningScore = input;
       }
       else{
           winningScore = 100;
       }
    
   // Check if Player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
       document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } 
    else{
        //next player
        nextPlayer();
    }
   }
    
    
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

function init(){
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

}







