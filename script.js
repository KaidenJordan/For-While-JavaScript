var wrapper = document.body.querySelector(".wrapper");
var dragonAttack = "";
var attack = "";
var dragonHealth= 10;
var userHealth = 5;

while(dragonHealth>0||userHealth>0){
 attack = prompt("Enter a number between 1-5 to deal damage to the dragon.");
//this is for if the attack is greater than 5
if(attack>5){ 
 dragonHealth = dragonHealth-1;
 dragonAttack = Math.floor(Math.random()*2)+1;
 userHealth = userHealth - dragonAttack;
//this is for if the attack is less than 5
  }else if(attack<5){
  dragonHealth = dragonHealth-attack;
  dragonAttack = Math.floor(Math.random()*2)+1;
  userHealth = userHealth - dragonAttack;
  }
//this is the text that shows if you kill the dragon
if(dragonHealth<1){
   wrapper.innerHTML="You destroyed the F$%^ out of that dragon! :)";
   break;
//this is the text that shiws if you kill the dragon   
   }else if(userHealth<1){
   wrapper.innerHTML="The dragon killed you. F :/";
   break;
   }
}