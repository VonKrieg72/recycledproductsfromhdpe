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
