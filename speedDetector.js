
function calculateDemeritPoints(speed){
    let speedLimit=70;
     if (speed > speedLimit) {
      demeritPoints = Math.floor((speed - speedLimit) / 5)
    return demeritPoints;
   } else if(speed<=70){
    return 'ok ';
   }  
    else if (demeritPoints>=12)
        {return 'LicenseSuspended';}     
    }
    
    const result = calculateDemeritPoints (speed);
    console.log (result);
  