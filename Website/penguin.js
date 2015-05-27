/**
* Created by Chris Herndon | Penguin Game
*/



function getRandomInt() {
    return Math.floor(Math.random() * (18 - 1 + 1)) + 1;
}
 
var randomNum = getRandomInt()

for(var i=1; i < 19; i++){
   var newDiv = document.createElement('div');
   if (i===randomNum){
    newDiv.id = 'penguin'+i;
   }
  else{
        newDiv.id='monster';
  } 
    

   document.getElementById('Title').appendChild(newDiv);
}


