//write your function here
function calculateDemeritPoints(){
  //assigning variables
  let speedLimit=70;
  const prompt =require("prompt-sync")({sigint :true});
  const speed = prompt("Enter the driver's speed: ")
  
    //use if and else if
     if (speed > speedLimit) {
      demeritPoints = Math.floor((speed - speedLimit) / 5)
    return 'points:'+demeritPoints;
   }
    else if(speed<=speedLimit){
    return 'ok ';
   }  if(demeritPoints>12){
    return 'License Suspended';
   }
    }
    //confirming code
    const result=calculateDemeritPoints();
  console.log (result);
    
   
  