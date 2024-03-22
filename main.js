let user = 0;
let compUser = 0;

const choises = document.querySelectorAll(".choise");
// selecting msg by queryselector
const msg = document.querySelector("#msg");
//for updation of score selecting score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// generating index for computer
const genCompChoise = () =>{
  const options =["rock","paper","scissors"];
  
const randIdx =  Math.floor(Math.random() * 3);
return options[randIdx];
  //rock,paper,scissors
}

const drawGame = ()=>{
  console.log("The game is draw...");
  msg.innerText = "The game is draw🐣  ";
  msg.style.backgroundColor = "#081b23";
  
}
const showWinner =(userWin,userChoise,compChoise) =>{
  if (userWin === true){
    user++;// increasing score value
    userScorePara.innerText = user;
    
    console.log("you win the game");
    msg.innerText =`you win 🎉${userChoise} beats ${compChoise}`;
    msg.style.backgroundColor = "#00C897";
  }
  else{
    compUser++; //increasing score value
    compScorePara.innerText = compUser;
    
    console.log("oops,you loose;");
    msg.innerText =`you lose🧸 ${compChoise} beats ${userChoise}`;
    msg.style.backgroundColor = "#ff204E";
  }
}

//player choise
const playGame = (userChoise) =>{
  console.log("user choise :",userChoise);
  //computer choise
  const compChoise = genCompChoise();
  console.log("computer choise",compChoise);
  if (userChoise === compChoise){
    //draw-game
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoise === "rock"){
      //scissors or paper
     userWin = compChoise === "paper" ? false:true;
    }
    else if (userChoise === "paper") {
      //rock,scissors
     userWin = compChoise === "scissors" ? false:true;
    }
    else{
      //paper,rock
      userWin = compChoise === "rock" ? false:true;
    }
    userWin = showWinner(userWin,userChoise,compChoise);
  }
}
choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    const userChoise = choise.getAttribute("id");
    const compChoise = genCompChoise();
    playGame(userChoise,userChoise,compChoise);
  });
});
