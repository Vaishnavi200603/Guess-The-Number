'use scrict';

//Math.random = generate random number between 0 and 1
//Math.trunc = remove decimals points

//so to generate numbers between 1 to 20, we use Math.random() and it will be multiple by 20 = so it will 
//generate random number between 1 to 19.99999, so to get 20 we add 1 to it.
let secretNumber = Math.trunc(Math.random()*20)+1; 
let score = 20; //also called as State Variable because it declared for Application state, means we want the 
                //code available on our application and not on DOM.
let highScore = 0;

//for CHECK Button = addEvenListener Mathod
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); //we use value for input buttons
    //console.log(guess, typeof guess);

    //When there was no Input
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';

    //Wnen Player Wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Answer!!";
        document.querySelector('.number').textContent = secretNumber;

        //manipluate CSS with javascript
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //When score is wrong   
    } else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "You Lose The Game!";
            document.querySelector('.score').textContent = 0;
        }   
    }

    //for AGAIN button = addEventListener Mathod
    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Start Guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';

        //manipluating CSS with Javascript
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })
})