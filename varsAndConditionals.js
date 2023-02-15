/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieAttack = 35;

if (jonSnowAttack >= jamieAttack) { 
    console.log('Jon Snow is more beefy ');
} else if (jamieAttack === jonSnowAttack) {
        console.log("both are equa l")
    }else {
    console.log('Jamie is the og ')
}
 let jonSnowHealth = 100;
 let jamieHealth = 0;

 if (jonSnowHealth <= jamieAttack) {
    console.log('Jon Snow has been slain ')
    jonSnowHealth -= jamieAttack;
 } else {
    jonSnowHealth -= jamieAttack 
    console.log("jon's health is down to " + jonSnowHealth)
    

 }

 jonSnowDefense = 25;
 
 if (jonSnowHealth <= jamieAttack) {
    console.log('Jon Snow has been slain ')
    jonSnowHealth -= jamieAttack;
 } else {
    jonSnowHealth -= jamieAttack - jonSnowDefense 
    console.log("jon's health is down to " + jonSnowHealth)
    }

  if (jonSnowHealth + 50 >= 100 ){
    jonSnowHealth = 100
  } else {
    jonSnowHealth += 50
  }
console.log(jonSnowHealth)

let flippedCoinHeads = true;

if (flippedCoinHeads){
    console.log('The fight continues')
} else {
  console.log('Jon is allowed to run away'

  )
}

for(let i = 0; i < 5; i++){
    if (jonSnowHealth <= 0) {
       console.log('Jon has been slain ')
} else {
    jonSnowHealth -= jamieAttack - jonSnowDefense;
    console.log(`Jon Snow heath is ${jonSnowHealth}`);
 }
}

while (jonSnowHealth > 0){ 
    jonSnowHealth -= jamieAttack - jonSnowDefense;
    if (jonSnowHealth <= 0) {
        console.log(`Jon snow is finally dead ${jonSnowHealth}`);
    }
}

if (jonSnowAttack > 25 && jonSnowAttack < 75){
    console.log('Jon snow is a mid level beast')
}

if (jamieAttack > 25 || jamieAttack < 75){
    console.log(`Jamie is strong `) 
} else {
    console.log('Jon is a mid level beast');
}
