// User experience

// Prompt r p or s 
// Alert- 
// 'the computer chose [x] - [you win!/you lose/ you tied]'
// 'the current score is [y:z]' 
// 'Would you like to play again?'

// cancel - 'the final score is [y:z]'

// ok - loop back to beginning

// var playerChoice = prompt("Let's Play Rock Paper Scissors! Type 'r' for Rock, 'p' for Paper, or 's' for Scissors", ["r, p, or s"]);
// var rps = ["rock", "paper", "scissors"]
// var pcChoice = rps[Math.floor(Math.random() * rps.length)]
// var playerScore = 0
// var pcScore = 0

var playerScore = 0
    var pcScore = 0

for (i=1; i<10; i++) {

    var playerChoice = prompt("Let's Play Rock Paper Scissors! Type 'r' for Rock, 'p' for Paper, or 's' for Scissors", ["r, p, or s"]);
    var rps = ["rock", "paper", "scissors"]
    var pcChoice = rps[Math.floor(Math.random() * rps.length)]

    if (playerChoice==="r" && pcChoice==="paper"){ 
        pcScore++;
        alert("Computer chose Paper. You lose! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo === false) {
            break;}
       
    } else if (playerChoice==="r" && pcChoice==="scissors"){
        playerScore++;
        alert("Computer chose Scissors. You win! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;}
        
    } else if (playerChoice==="r" && pcChoice==="rock"){ 
        alert("Computer chose Rock. It's a tie! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo === false) {
            break;}
        
    } else if (playerChoice==="p" && pcChoice==="scissors"){ 
        pcScore++;
        alert("Computer chose Scissors. You lose! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
    } else if (playerChoice==="p" && pcChoice==="rock"){ 
        playerScore++;
        alert("Computer chose Rock. You win! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
    } else if (playerChoice==="p" && pcChoice==="paper"){ 
        alert("Computer chose Paper. It's a tie! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
     } else if (playerChoice==="s" && pcChoice==="rock"){ 
        pcScore++;
        alert("Computer chose Rock. You lose! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
      } else if (playerChoice==="s" && pcChoice==="paper"){ 
        playerScore++;
        alert("Computer chose Paper. You win! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
    } else if (playerChoice==="s" && pcChoice==="scissors"){ 
        alert("Computer chose Scissors. It's a tie! Current score- You: " + playerScore + " / Computer: " + pcScore);
        var yesOrNo = confirm("Click Ok to play again?")
        if (yesOrNo == false) {
            break;
        } 
    }
}

alert("Thanks for playing! The final score is You: " + playerScore + " / Computer: " + pcScore);