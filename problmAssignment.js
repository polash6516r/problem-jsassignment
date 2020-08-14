 //feetToMile
 function feetToMile(feet){
     var Mile = feet / 5280;
     return Mile;
 }
 var result = feetToMile(15840);
 console.log(result);



 // WoodCalculator
 function WoodCalculator(chair, table, bed){
     var chairCount = chair * 1;
     var tableCount = table * 3;
     var bedCount = bed * 5;
     var totalWood = chairCount + tableCount + bedCount;
     return totalWood;
 }


 // brickCalculator


 //tinyFriend
  function tinyFriend(friends){
     var smallest = friends[0];
     for (i = 0; i < friends.length; i++){
         var length = friends[i];
         if(length< smallest){
             smallest = length;
         }
     }
     return smallest;
}

  console.log(tinyFriend(["polas", "joi", "riad"]))