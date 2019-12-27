var count = 30
var questNumber=0;

var questionBank = [{
    quest: 'Who was the butler on "The Fresh Prince of Bel Air"?',
    answ: ["Geoffrey", "Bertram", "Carlton"]
},
{
    quest: 'What are the two types of playing discs in the game of pogs?',
    answ: ["slappers and flappers", "polliwogs and tadpoles", "pogs and slammers"]

},
{
    quest: 'Who were Tim and Jill Taylor\'s kids on "Home Improvement"?',
    answ: ["Brian, Ray and Mike", "Bobby, Ryan and Matt", "Brad, Randy and Mark"]

}
]

var answerbank={
    "Who was the butler on \"The Fresh Prince of Bel Air\"?":["Geoffrey",'<iframe src="https://www.youtube.com/embed/q21XFCR8cM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
}

function run() {
    intervalId = setInterval(decrement, 1000);
    setQuestion(questNumber)
    
    
}


function decrement() {

    count--

    $(".timeremain").html(`<h2 class="text-center">Time Remaining: ${count}sec</h2>`)
    if (count == 0) {
        clearInterval(intervalId)
    }
    

}

function setQuestion(questnum){
  $(".card-title").text(questionBank[0].quest)
  for (i=0;i<questionBank[0].answ.length;i++){
      newDiv=`<div><input type="radio" name="answer" value=${questionBank[0].answ[i]}> ${questionBank[0].answ[i]}</div>`
      $(".card-text").append(newDiv)
  }

}

$(".card-text").click(function(event){
   console.log($(event.target).attr("value"))
   var question=questionBank[0].quest
   //console.log(question)
   console.log(answerbank[question][0])
   
   if ($(event.target).attr("value")==answerbank[question][0]){
       alert("winner")

   }

})

run()