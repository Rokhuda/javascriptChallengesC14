//1
function dayTime() {
  function dayy() {
    let day = new Date();
    let today = day.getDate();
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return weekDays[today];
  }

  function timee() {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    let meridies;

    if (hours < 12) {
      meridies = "AM";
    } else if (hours > 12) {
      hours = hours - 12;
      meridies = "PM";
    } else {
      meridies = "PM";
    }
    return hours + " " + meridies + " : " + minutes + " : " + " " + seconds;
  }
  let dateTime = "Today is: " + dayy() + " . Current time is : " + timee();

  document.getElementById("currentDate").innerHTML = dateTime;
}

// 2
function loadURL() {
  let getURL = document.URL;
  document.getElementById("currentURL").innerHTML = getURL;
}
//3

function checkWord() {
  let sentence = document.getElementById("javaInput").value;
  let word = sentence.startsWith("Java");
  document.getElementById("javaCheck").innerHTML = word;
}

//4

function largest() {
  let num1 = document.getElementById("1stBox").value;
  let num2 = document.getElementById("2ndBox").value;
  let num3 = document.getElementById("3rdBox").value;
  let largeNum = Math.max(num1, num2, num3);
  document.getElementById("large").innerHTML = largeNum;
}

//5

function capitalText() {
  text = document.getElementById("capiText").value;
  sentence = text.split(" ");
  let i = 0;

  for (i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  joinedCapi = sentence.join(" ");
  document.getElementById("capi").innerHTML = joinedCapi;
}

//6

function time_convert() {
  let num = document.getElementById("convertTime").value;
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  convertedTime = hours + ":" + minutes;
  document.getElementById("convert").innerHTML = convertedTime;
}


