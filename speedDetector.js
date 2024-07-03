//write your function here
function calculateDemeritPoints(speed){
    let speedLimit=70;
    //use if and else if
     if (speed > speedLimit) {
      demeritPoints = Math.floor((speed - speedLimit) / 5)
    return demeritPoints;
   } else if(speed<=70){
    return 'ok ';
   }  
    else if (demeritPoints>=12)
        {return 'LicenseSuspended';}     
    }
    //check if your code is correct
    const result = calculateDemeritPoints (speed);
    console.log (result);
  