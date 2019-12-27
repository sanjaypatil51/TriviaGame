var count = 5
var questNumber = 0;
var answered = 0
var correct = 0
var wrong = 0
var unanswered = 0

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

},
{
    quest: "On which kids' show did the character Pierre Escargot appear?",
    answ: ["All That", "The Mickey Mouse Club", "The Ren & Stimpy Show"]
},
{
    quest: 'Which TV show theme song had the following opening line? "Whatever happened to predictability?',
    answ: ["Full House", "Step by Step", "Sister Sister"]
},
{
    quest: 'On "Beverly Hills, 90210," the entire high school rallies to ensure this character graduates.',
    answ: ["Kellie Taylor", "Donna Martin", "Brenda Walsh"]
},
{
    quest: 'Where is "Dawson\'s Creek" set?',
    answ: ["Wilmington, North Carolina", "Capeside, Massachusetts", "Montauk, New York"]
},
{
    quest: 'What is Bart Simpson\'s full name?',
    answ: ["Bartemius Crouch Simpson", "Bartholomew JoJo Simpson", "Bart Simpson"]
},
{
    quest: '"Wannabe" was the Spice Girls\' first single. What was the second?',
    answ: ["2 Become 1", "Say You'll Be There", "Who Do You Think You Are"]

},
{
    quest: "Which '90s boy band featured Nick, Drew, Justin and Jeff?",
    answ: ["98 Degrees", "Backstreet Boys", "NSYNC"]
}
]

var answerbank = {
    "Who was the butler on \"The Fresh Prince of Bel Air\"?": ["Geoffrey", '<iframe src="https://www.youtube.com/embed/q21XFCR8cM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'What are the two types of playing discs in the game of pogs?': ["pogs and slammers", '<iframe src="https://www.youtube.com/embed/-iMBuAYvVsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'Who were Tim and Jill Taylor\'s kids on "Home Improvement"?': ["Brad, Randy and Mark", '<iframe src="https://www.youtube.com/embed/SBZyLbwl5hQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    "On which kids' show did the character Pierre Escargot appear?": ["All That", '<iframe src="https://www.youtube.com/embed/KU3RCJgAShw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'Which TV show theme song had the following opening line? "Whatever happened to predictability?': ["Full House", '<iframe src="https://www.youtube.com/embed/TJsPgsYbFDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'On "Beverly Hills, 90210," the entire high school rallies to ensure this character graduates.': ["Donna Martin", '<iframe src="https://www.youtube.com/embed/iunYmHH0UNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'Where is "Dawson\'s Creek" set?': ["Capeside, Massachusetts", '<iframe src="https://www.youtube.com/embed/ntxG68WJzuA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    'What is Bart Simpson\'s full name?': ["Bartholomew JoJo Simpson", '<iframe src="https://www.youtube.com/embed/Xqog63KOANc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    '"Wannabe" was the Spice Girls\' first single. What was the second?': ["Say You'll Be There", '<iframe src="https://www.youtube.com/embed/9ro0FW9Qt-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    "Which '90s boy band featured Nick, Drew, Justin and Jeff?": ["98 Degrees", '<iframe src="https://www.youtube.com/embed/4gAsPT-vgeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
}

function run() {
    intervalId = setInterval(decrement, 1000);
    setQuestion()


}


function decrement() {

    count--

    $(".timeremain").html(`<h2 class="text-center">Time Remaining: ${count}sec</h2>`)
    if (count == 0) {
        clearInterval(intervalId)
        $(".answers").attr("disabled", true)
        var question = questionBank[questNumber].quest
        newDiv = $("<div>")
        newDiv.addClass("embed-responsive embed-responsive-16by9")
        newDiv.append(answerbank[question][1])
        $(".card-text").append(newDiv)
        unanswered++
        newDiv1 = `<h5 style="color: red;">Time's Up, correct answer is: ${answerbank[question][0]}</h5>`
        $(".card-text").append(newDiv1)

        setTimeout(function () {
            questNumber++
            if (questNumber < questionBank.length) {
                count = 5
                run()
            }

        }, 4000);


    }


}

function setQuestion() {
    $(".card-title").text(questionBank[questNumber].quest)
    $(".card-text").empty()
    for (i = 0; i < questionBank[0].answ.length; i++) {
        newDiv = `<div><input class="answers" type="radio" name="answer" value="${questionBank[questNumber].answ[i]}"> ${questionBank[questNumber].answ[i]}</div>`
        $(".card-text").append(newDiv)
    }

}

$(".card-text").click(function (event) {
    clearInterval(intervalId)
    answered++
    console.log($(event.target).attr("value"))
    var question = questionBank[questNumber].quest
    var vType = $(event.target).attr("type")
    //console.log(vType)
    console.log(answerbank[question][0])


    if ($(event.target).attr("value") == answerbank[question][0] && vType == "radio") {
        //$(".card-text").empty()   
        $(".answers").attr("disabled", true)
        newDiv = $("<div>")
        newDiv.addClass("embed-responsive embed-responsive-16by9")
        newDiv.append(answerbank[question][1])
        $(".card-text").append(newDiv)
        correct++
        newDiv1 = `<h5 style="color: red;">Your Answer is correct</h5>`
        $(".card-text").append(newDiv1)
        setTimeout(function () {
            questNumber++
            if (questNumber < questionBank.length) {
                count = 5
                run()
            }

        }, 4000);

    }
    else if ($(event.target).attr("value") != answerbank[question][0] && vType == "radio") {
        //$(".card-text").empty()   
        $(".answers").attr("disabled", true)
        newDiv = $("<div>")
        newDiv.addClass("embed-responsive embed-responsive-16by9")
        newDiv.append(answerbank[question][1])
        $(".card-text").append(newDiv)
        wrong++
        newDiv1 = `<h5 style="color: red;">Your Answer is wrong, correct answer is: ${answerbank[question][0]}</h5>`
        $(".card-text").append(newDiv1)
        setTimeout(function () {
            questNumber++
            if (questNumber < questionBank.length) {
                count = 5
                run()
            }

        }, 4000);

    }

}

)

run()