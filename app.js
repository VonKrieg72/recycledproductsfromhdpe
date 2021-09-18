// let userName = 'David'
// userName = 'Barry'
// console.log(userName)


// userName = "Steven"
// console.log(userName)

let userName = prompt('Please Enter Your Name: ');
console.log(userName);
document.write('<h2>' + userName + '</h2>');

let userAnswer = prompt('Do you want to reduce plastic waste?');
console.log(userAnswer);

if (userAnswer == 'yes' ) {
   document.write('<h3>We are glad to have you here ' + userName +'</h3>'); 
} else {
    document.write('<h3>' + userName +', go cry about climate change then, trendy.</h3>'); 
}