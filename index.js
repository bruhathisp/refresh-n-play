var randomNumber1= Math.floor(Math.random()*6)+1;

var randsource1= "images/dice"+ randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src", randsource1);



var randomNumber2= Math.floor(Math.random()*6)+1;
var randsource2= "images/dice"+ randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src", randsource2);



if (randomNumber1> randomNumber2){
    document.querySelector("h3").innerHTML = "🚩Player1 Wins"
}
else if (randomNumber1< randomNumber2){
    
    // alert(2)
    document.querySelector("h3").innerHTML="🚩Player2 Wins"
}
else{

    
    // alert(0)
    document.querySelector("h3").innerHTML="Draw!"

}



// start of rock1 paper2 scissor3

var randomrpc1= Math.floor(Math.random()*3)+1;
var randrpc1= "images/rpc/img"+ randomrpc1+".jpg";
document.querySelectorAll("img")[2].setAttribute("src", randrpc1);



var randomrpc2= Math.floor(Math.random()*3)+1;
var randrpc2= "images/rpc/img"+ randomrpc2+".jpg";
document.querySelectorAll("img")[3].setAttribute("src", randrpc2);


// rock1 and scissor3 player 1 Wins
// scissor3 and paper2 player1 Wins
// paper2 and rock1 player1 Wins



// paper2 and scissor3 player 2 Wins
// scissor3 and rock1 player 2 wins
// rock1 and paper2 player2 Wins



if ( (randomrpc1===1 && randomrpc2===3) ){

    
        document.querySelector("h2").innerHTML = "🚩Player1 Wins";
    
    
}

else if ( (randomrpc1===3 && randomrpc2===2) ){

    
    document.querySelector("h2").innerHTML = "🚩Player1 Wins";


}

else if ( (randomrpc1===2 && randomrpc2===1) ){

    
    document.querySelector("h2").innerHTML = "🚩Player1 Wins";


}



else if (randomrpc2=== randomrpc1){
    
    // alert(2)
    document.querySelector("h2").innerHTML="Draw!";
}

else{

    
    // alert(0)
    document.querySelector("h2").innerHTML="🚩Player2 Wins";

}