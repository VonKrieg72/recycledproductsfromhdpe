function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName; // -> 'BARRY'
}

function getUserAnswer(){
    let userAnswer = prompt('Do you want to reduce plastic waste?');
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() == 'yes' ) {
       document.write('<h3>We are glad to have you here friend</h3>'); 
    } else {
        document.write('<h3>Go cry about climate change then, trendy.</h3>'); 
    }
}

function getPlasticJewleryAnswer(){
    let likeplasticjewlery = prompt('Do you like HDPE jewlery?')
    let url ="https://content.instructables.com/ORIG/FV1/1Q4B/IUSLOYWU/FV11Q4BIUSLOYWU.png?auto=webp&frame=1&fit=bounds&md=2ce0e94e2ce2ab89cf4009431b19f8ce.jpeg"
    if (likeplasticjewlery.toLowerCase == 'yes') {
        document.write('<h3>We got that too.</h3>');
        document.write('<img src="' +url+ '"/>') 
    }
}


// Create a Number guessing game
// Figure the number to be guessed as well as the range
// How many chances do they get
// Messages for right or wrong
//     look for xx
// reward for the right guess
// Prompt needed for the user
//     validate input before checking
// need some counter

function userGuessingGame() {
    correctAnswer = 45;
    userAttempts = 5;
    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('Please Enter a Number 1-100');
        while(userGuess < 1 || userGuess > 100){
            userGuess = prompt('Wrong Range.  Please Enter a Number 1-100');   
        }
        if (userGuess == correctAnswer){
            alert('You got it right!');
            break;
        }else if(userGuess < correctAnswer){
           alert('Too Low.  Try Again.') 
        }  else if (userGuess > correctAnswer) {
            alert('Too High.  Try Again')
        }else {
           alert('Something Else Went Wrong'); 
        }
        console.log(i);
        if(i == userAttempts - 1){
           alert('You did not win.  Correct Answer is: ' + correctAnswer); 
        }
    }
}

userGuessingGame();

function plasticJewlery(){
    let numberOfPlasticJewlery = prompt('How many times do you want to see plastic jewlery?')
    for(let i = 0; i < numberOfPlasticJewlery; i ++){
        document.write('<img src="' + url + '" >')
    }
    
}
