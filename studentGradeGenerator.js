//write your function here
function calculateGrade(mark) {
  //use if and else if
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60) {
      return 'B';
    } else if (mark >= 50) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else if (mark<=39){
      return 'E';
    }
    
  }

  const prompt =require("prompt-sync")({sigint :true});
  let mark=prompt("Enter student marks (0-100):");
  //check code
  const result = calculateGrade(mark);
  console.log (result);
  