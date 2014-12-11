//Nav Matrix
var UP    = 0;
var RIGHT = 1;
var UNDER = 2; 
var DOWN  = 3; 
var LEFT  = 4;
        
var nav = new Array( //  0   1   2   3   4   
            /* 0 */   [  1,  3,  5,  4,  2],
            /* 1 */   [ -1, -1, -1,  0, -1],
            /* 2 */   [  6,  0, -1,  7, -1],
            /* 3 */   [  8, -1, -1,  9,  0], 
            /* 4 */   [  0, -1, -1, -1, -1],
            /* 5 */   [  0, -1, -1, -1, -1],
            /* 6 */   [ -1, -1, -1,  2, -1],
            /* 7 */   [  2, -1, -1, -1, -1],
            /* 8 */   [ -1, -1, -1,  3, -1],
            /* 9 */   [ -1, -1, -1, -1, -1]
                    );

function newLocation(dir){
   var nextLocation = nav[currentLoc][dir];
   if (nextLocation >= 0){
      currentLoc = nextLocation;
      puzzlePiece(currentLoc);
      countScore();
      displayMessage(stageLoc[currentLoc].description);
      buttonDisable();
      } else {
    displayMessage("You can't go this way.")
     }
}

//Directional buttons
function goUp() {
    newLocation(UP);     
}    
function goDown() {
    newLocation(DOWN);    
}
function goUnder() {
    newLocation(UNDER);
}
function goLeft() {
    newLocation(LEFT);
}
function goRight() {
    newLocation(RIGHT);
}    