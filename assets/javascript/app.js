// Make a timer
// make an array of objects and make  it possible to only pick one option
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdown = -1;
var q1Answered = false;
var q2Answered = false;
var q3Answered = false;
var q4Answered = false;
$("#outroPage").hide();
$("#mainPage").hide();
$("#startButton").click(function () {
    $("#introPage").hide();
    $("#mainPage").show();
    countdown = 10;
    unanswered = 0;
    timerId = setInterval(function () {
        if (countdown >= 0) {

            if (countdown == 0) {

                if (q1Answered == false ) {
                    unanswered ++;
                }
                if(q2Answered == false){
                    unanswered++;
                }
                if(q3Answered == false){
                    unanswered ++;
                }
                if(q4Answered == false){
                    unanswered ++;
                }
                countdown = -1;
                $("#outroPage").show()
                $("#mainPage").hide();
                $("#correctAnswers").text("Correctly Answered: " + correctAnswers);
                $("#incorrectAnswers").text("Incorrectly Answered: " + incorrectAnswers);
                $("#unanswered").text("Unanswered: " + unanswered);
            }
            else {
                countdown = countdown - 1
            }
        }
        $("#timer").text("Time Remaining: " + countdown.toString());
    }, 1000);


})

$("#firstQuestion1").click(function () {
    correctAnswers++;
    q1Answered = true

})
$("#firstQuestion2").click(function () {
    incorrectAnswers++;
    q1Answered = true;
})
$("#secondQuestion1").click(function () {
    incorrectAnswers++;
})
$("#secondQuestion2").click(function () {
    correctAnswers++;
})
$("#thirdQuestion1").click(function () {
    correctAnswers++;
})
$("#thirdQuestion2").click(function () {
    incorrectAnswers++;
})
$("#fourthQuestion1").click(function () {
    correctAnswers++;
})
$("#fourthQuestio1").click(function () {
    incorrectAnswers++;
})
$("#submit").click(function () {
    $("#mainPage").hide();
    $("#outroPage").show();
    $("#correctAnswers").text("Correctly Answered: " + correctAnswers);
    $("#incorrectAnswers").text("Incorrectly Answered: " + incorrectAnswers);
    $("#unanswered").text("Unanswered: " + unanswered);
});