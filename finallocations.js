//Locations and Items
function Location(id, name, description, hasItem, hasVisited) {
   //Attributes 
   this.id = id;
   this.name = name;
   this.description = description;
   this.hasItem = hasItem;
   this.hasVisited = hasVisited;
}   

function stageInit(){
   var stage = new Location();
       stage.id = 0;
       stage.name = "stage";
       stage.description = "0. You are standing on Stage in Paris with over 75,000 fans screaming your name.";
       stage.hasItem = false;
       stage.hasVisited = false;
   
   var screaming = new Location();
       screaming.id = 1;
       screaming.name = "screaming";
       screaming.description = "1. The screaming gets louder.";
       screaming.hasItem = false; 
       screaming.hasVisited = false;
   
   var firstSong = new Location();
       firstSong.id = 2; 
       firstSong.name = "firstSong";
       firstSong.description = "2. You start and finish your first song.";
       firstSong.hasItem = false; 
       firstSong.hasVisited = false;
   
   var secondSong = new Location();
       secondSong.id = 3;
       secondSong.name = "secondSong";
       secondSong.description = "3. You perform another song.";
       secondSong.hasItem = false; 
       secondSong.hasVisited = false;
   
   var crying = new Location();
       crying.id = 4;
       crying.name = "crying";
       crying.description = "4. Fans start to cry. Oh no!";
       crying.hasItem = false; 
       crying.hasVisited = false;

   
   var costume = new Location();
       costume.id = 5;
       costume.name = "costume";
       costume.description = "5. Costume change!";
       costume.hasItem = false; 
       costume.hasVisited = false;

   
   var bracelet = new Location();
       bracelet.id = 6;
       bracelet.name = "bracelet";
       bracelet.description = "6. You contribute to Make a Wish by singing to a fan in the audience.";
       bracelet.hasItem = true; 
       bracelet.hasVisited = false;

   
   var loveXO = new Location();
       loveXO.id = 7;
       loveXO.name = "loveXO";
       loveXO.description =  "7. Your love is like XO, you perform the XO song and feel overwhelmed with love from your fans.";
       loveXO.hasItem = true; 
       loveXO.hasVisited = false;

   
   var autographs = new Location();
       autographs.id = 8;
       autographs.name = "autographs";
       autographs.description =  "8. You sign autographs for fans in between songs.";
       autographs.hasItem = true; 
       autographs.hasVisited = false;

   
   var flowers = new Location();
       flowers.id = 9;
       flowers.name = "flowers";
       flowers.description =  "9. You receive flowers from a generous fan and notice something that shines in the bouquet...it's the ring! Game Over! Refresh to play again.";
       flowers.hasItem = true; 
       flowers.hasVisited = false;

   
   var error = new Location(); 
	   error.id = 10
	   error.name = "Error"
	   error.description = "You cannot go that way."
	   error.hasItem = false;
       error.hasVisited = false;
   

   stageLoc[0]= stage,
   stageLoc[1]= screaming,
   stageLoc[2]= firstSong,
   stageLoc[3]= secondSong,
   stageLoc[4]= crying,
   stageLoc[5]= costume,
   stageLoc[6]= bracelet,
   stageLoc[7]= loveXO,
   stageLoc[8]= autographs,
   stageLoc[9]= flowers,
   stageLoc[10]= error;
                      
}  
 
function item(id, name, description, itemTake) {   
    this.id = id;
    this.name = name;
    this.description = description;
    this.itemTake = itemTake;
}    

function itemInit(){
   var itembracelet = new item();
       itembracelet.id = 6;
       itembracelet.name = "bracelet";
       itembracelet.description = "A fan hands you a bracelet.";
       itembracelet.itemTake = false;
    
   var itemlove = new item(); 
       itemlove.id = 7;
       itemlove.name = "love";
       itemlove.description = "You are overwhelmed with love by your fans." ;
       itemlove.itemTake = false; 
   
   var itemautographs = new item(); 
       itemautographs.id = 8;
       itemautographs.name = "autographs";
       itemautographs.description = "You sign autographs for your fans and you are thanked.";
       itemautographs.itemTake = false; 
   
   var itemflowers = new item(); 
       itemflowers.id = 9;
       itemflowers.name = "flowers";
       itemflowers.description = "You are handed a generous bouquet of flowers.";
       itemflowers.itemTake = false; 
       
   items[6] = itembracelet, 
   items[7] = itemlove,
   items[8] = itemautographs,
   items[9] = itemflowers;    
}
   