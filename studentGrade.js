//write your function here
function calculateGrade(mark) {
  //use if and else if
    if (mark>=101) {
      return 'Invalid input';
    }else if (mark>79){
     return 'A';
    }else if (mark >= 60) {
      return 'B';
    } else if (mark >= 50) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else if (mark<=39){
      return 'E';
    }  else if (mark>=0){
      return 'E';
    }else if (mark<0){
     return 'Invalid input';
   }
}
  

  const prompt =require("prompt-sync")({sigint :true});
  let mark=parseFloat(prompt("Enter student marks (0-100):"));
  
  //check code
  const result = calculateGrade(mark);
  console.log (result);
  console.log(prompt);
  