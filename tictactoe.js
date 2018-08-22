var nl=document.querySelectorAll(".squares");
var winnerMessage=document.getElementById("winnerMessage");
var reset=document.getElementById("newGame");
var h1 = document.querySelector("h1");


winnerMessage.textContent="Player 1";
var gameOn=true;
var turn=0;
var arr=[];
var win=false;
//  console.log(win);
//loop thrugh nl(nodlist and store it in array)
// var arr = [];
// for(var i = nl.length; i--;	arr.unshift(nl[i]));
for (var i=0 ; i<nl.length;i++){
	//loop through nodelist and store it in var arr
	arr.push(nl[i]);
	//add eventlistener to every squares
	arr[i].addEventListener("click", function(){
		
	       if (gameOn){
               //even will be O.first player
               if(turn%2===0){
                        if (this.textContent===""){
                                //set first box to letter 0						
                                this.textContent="O";
                            console.log(this.textContent);
                                    //after first player make his move. display player two and add +1 to turn
						          winnerMessage.textContent="Player 2's Turn";
						          turn++;
                                //check winning combination everytime a player make a move by calling the function
							      winCheck();
                                    //if there is a winning combination. Display Player wins. And update gameon to false to stop the game
                                gameWonP1();
                                                } //end of if statement this.textContent <-----     
				}else if(turn%2 >= 1 ) {
                    if (this.textContent===""){
                       //odd will be X second player
						this.textContent="X";
                        //after second player make his move. display player 1 and add +1 to turn
						winnerMessage.textContent="Player 1's turn";
						turn++;
                        //check winning combination everytime a player makes a move by calling the function
						winCheck();
                                //if there is a winning combination. Display Player wins. And update gameon to false to stop the game
							gameWonP2();	 
                            } //end of if statement this.textContent <-----
						
						}//end of if(turn) statement
                    } //end of if(gameOn) statement
			});
		  }//end of for loop


//checking all posibilities
function winCheck(){
	if (arr[0].textContent!==""&&arr[0].textContent===arr[1].textContent&&arr[1].textContent===arr[2].textContent){
		win=true;
	}else if (arr[3].textContent!==""&&arr[3].textContent===arr[4].textContent&&arr[4].textContent===arr[5].textContent) {
		win=true;
    }else if (arr[6].textContent!==""&&arr[6].textContent===arr[7].textContent&&arr[7].textContent===arr[8].textContent){
		win=true;
	}else if (arr[0].textContent!==""&&arr[0].textContent===arr[3].textContent&&arr[3].textContent===arr[6].textContent){
			win=true;
    }else if (arr[1].textContent!==""&&arr[1].textContent===arr[4].textContent&&arr[4].textContent===arr[7].textContent){
		win=true;
    }else if (arr[2].textContent!==""&&arr[2].textContent===arr[5].textContent&&arr[5].textContent===arr[8].textContent){
		win=true;

    }else if (arr[0].textContent!==""&&arr[0].textContent===arr[4].textContent&&arr[4].textContent===arr[8].textContent){
			win=true;
		//arr 0=4=8
    }else if (arr[2].textContent!==""&&arr[2].textContent===arr[4].textContent&&arr[4].textContent===arr[6].textContent){
		win=true;
    }else
if(arr[0].textContent!==""&&arr[1].textContent!==""&&arr[2].textContent!==""&&arr[3].textContent!==""&&arr[4].textContent!==""&&arr[5].textContent!==""&&arr[6].textContent!==""&&arr[7].textContent!==""&&arr[8].textContent!=="")
    {   
        winnerMessage.textContent="Draw"
        reset.textContent="New Game?"
        gameOn=false;
    }
    
}
		

 reset.addEventListener("click",function(){
  for (var i = 0; i < arr.length; i++){
      arr[i].textContent="";
      gameOn=true;
      turn=0;
      win=false;
      reset.textContent="";
      winnerMessage.textContent="Player 1";
  }
    
});

function gameWonP1(){
    if (win){
		winnerMessage.textContent="Player 1 Wins";
        gameOn=false;
        reset.textContent="New Game?"
        //then set the win value to false
		//win=false;                                 
	}
}

function gameWonP2(){
    if (win){
			winnerMessage.textContent="Player 2 Wins";
            gameOn=false;
            reset.textContent="New Game?"
            //then set the win value to false
			//win=false;                               
    }
}

	


