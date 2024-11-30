/*Q1: Write a program of a basic mark sheet using JavaScript involves let, const variables to
store marks for different subjects and then calculating the total marks, percentage, and grade
based on those marks. Using template literals and variable using let and const and final
output is shown in document.write().*/

const yourName = prompt ("Enter Your Name");
const sub1= +prompt("Enter English Marks");
const sub2 = +prompt("Enter Mathematics Marks");
const sub3 = +prompt("Enter Science Number");
const sub4 = +prompt("Enter  Computer Number");
const sub5 = +prompt("Enter General knowledge Number");
   const obtMarks =(sub1 + sub2 + sub3 + sub4 + sub5);
   const totalMarks = 500
  const per = (obtMarks/totalMarks*100);

  
  
  let grade = per >= 80 && per < 101 ? "A+" : per >= 70 && per < 81 ? "A" : per >= 60 && per < 71 ? "B" : per >= 50 && per < 61 ? "C" : per >= 40 && per < 51 ? "D" : per >= 101 ? "Invalid Percentage" : "Fail"



 

  document.write(`
    <h1 style="background-color:green ;text-align:center"> Marks Sheet</h1>
    <div style="display: flex ;justify-content: center; align-items: center; background-color: #f9f9f9;">
    
      <table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; text-align: center; width: 50%; background-color: white;">
       
      <thead>
          <tr style="background-color: #4CAF50; color: white;">
            <th>Name</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${yourName}</td>
            <td>${obtMarks}</td>
            <td>${totalMarks}</td>
            <td>${per.toFixed(2)}%</td>
            <td>${grade}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `);


