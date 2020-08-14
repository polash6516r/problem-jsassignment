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
function brickCalculator(height){
    var brick = 0;
    if (height <= 10){
        brick = height * 50;
    } else if (height <= 20) {
        var first10floor = 10 * 50;
        var remaining = heigh - 10;
        var second10floor = remaining * 100;
        brick = first10floor + second10floor;
    } else {
        var first10floor = 10 * 50;
        var second10floor = 10 * 100;
        var remaining = height - 20;
        var thirtPart = remaining * 300;
        brick = first10floor + second10floor + thirtPart;
    }
    return brick;
}
var count = brickCalculator(52);
console.log(count);


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