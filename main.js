//1

function dayy(){
  let day = new Date();
  let today = day.getDate();
  let weekDays = ["Sunday" , "Monday" , "Tuesday", "Wednesday", "Thursday" , "Friday" , "Saturday"];     
  return weekDays[today];
}

function timee(){
 let day = new Date();    
 let hours = day.getHours();
 let minutes =day.getMinutes();
 let seconds = day.getSeconds();
 let meridies;
 

if (hours<12)
{

   meridies = "AM"
}
else if (hours > 12)
{
   hours = hours - 12;
   meridies ="PM";
}
else {
  
 meridies = "PM";
}
return hours +" "+ meridies+" : "+minutes+" : "+" "+seconds;
  }


console.log( "Today is: " + dayy()+" . Current time is : " +timee());



// 2
function 
let document.URL

//3


function checkWord(){
    let sentence = prompt("enter a sentence");
    let word = sentence.startsWith("Java");
    return word;
}
console.log(checkWord());


//4


function largest() {
    let num1 = (prompt('Enter a number'));
    let num2 = (prompt('Enter a number'));
    let num3 = (prompt('Enter a number'));
    var large = Math.max(num1, num2, num3);
    return large
  }
    console.log(largest());


//5


str = prompt("Tell me your deepest darkest secret");

function titleCasestr() {
  
  
  sentence = str.split(' ');
 
 
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1); 
  }
  return sentence.join(' ');
}
titleCasestr();


//6


let num = prompt( "Enter a number");

function time_convert()
 {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return hours + ":" + minutes;
}

console.log(time_convert());



