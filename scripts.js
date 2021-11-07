//BUSINESS ZONE
function GetFirstAndLast(sentence){
  let sentenceArr = sentence.split("");
  const firstLetter = sentenceArr[0].toUpperCase();
  const lastLetter = sentenceArr[sentenceArr.length-1].toUpperCase();
  return [firstLetter,lastLetter];
};
function Reverse(letterArray){
  return letterArray.reverse().join("");
};
function Combine(sentence){
  const output = Reverse(GetFirstAndLast(sentence));
  const middleLetter = Count(sentence);
  const result = middleLetter + sentence + output;
  return result.split("").reverse().join("");
};
function Count(sentence){
  const sentenceArr = sentence.split("").join("").split("");
  const count = Math.floor(sentenceArr.length/2);
  return sentenceArr[count];
};
function EmptyString(){
  setInterval(()=>{
    return "";
  }, 6000);
};
function ResetLabel(){
  setInterval(()=>{
    $("#label").text("Type in a sentence to create a cipher secret");
  }, 5000);
};
//UI ZONE
//RESET MESSAGE
function ResetMessages(target){
  setTimeout(() =>{
    $(`.${target}`).text(`Message Erased`);
  }, 3000);
  setTimeout(()=> {
    $(`.${target}`).text(`${target} Sentence`);
  }, 5000);
};

$(document).ready(function(){
  console.log("I pity the dev tool!");
  let secretPhrase = "";
  let userInput = "";
  //COLLECT USER INPUT
  $("#the-form").submit(function(event){
    event.preventDefault();
    $("#label").text("Sentence submitted");
    userInput = $("#user-input").val();
    $(".box").show();
    secretPhrase = Combine(userInput);
    $("#user-input").val("");
  });
  // CHANGE SECRET MESSAGE
  $(".Secret").click(function(){
    $(".Secret").text(secretPhrase);
    ResetMessages("Secret");
    userInput = EmptyString();
    secretPhrase = EmptyString();
    ResetLabel();
  });
  //CHANGE REGULAR MESSAGE
  $(".Regular").click(function(){
    $(".Regular").text(userInput);
    ResetMessages("Regular");
    secretPhrase = EmptyString();
    userInput = EmptyString();
    ResetLabel();
  });
});