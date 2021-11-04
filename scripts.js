function GetFirstAndLast(sentence){
  let sentenceArr = sentence.split("");
  const firstLetter = sentenceArr[0].toUpperCase();
  const lastLetter = sentenceArr[sentenceArr.length-1].toUpperCase();
  return [firstLetter,lastLetter];
}
function Reverse(letterArray){
  const reversedLetters = letterArray.reverse();
  return reversedLetters.join("");
}
function Combine(sentence){
  const output = Reverse(GetFirstAndLast(sentence));
  const middleLetter = Count(sentence);
  const result = middleLetter + sentence + output;
  return result.split("").reverse().join("")
}
function Count(sentence){
  const sentenceArr = sentence.split("").join("").split("");
  const count = Math.floor(sentenceArr.length/2);
  return sentenceArr[count];
}
$(document).ready(function(){
  console.log("I pity the dev tool!")
  let secretPhrase = "";
  let userInput = "";
  $("#the-form").submit(function(event){
    event.preventDefault();
    $("#label").text("Sentence submitted");
    userInput = $("#user-input").val();
    $(".box").show();
    secretPhrase = Combine(userInput);
    $("#user-input").val("");
  });
  $(".secret").click(function(){
    $(".secret").text(secretPhrase)
  })
  $(".regular").click(function(){
    $(".regular").text(userInput)
  })
})