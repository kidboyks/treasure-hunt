'use strict';
var allAnswers = {
  1: "answer",
  2: "answer1",
  3: "answer2",
  4: "answer3",
  5: "answer4",
  6: "answer5",

};
exports.check = function(qno, answer){
  if(allAnswers[qno]==answer){
    console.log(allAnswers[qno]);
    return true;

  }
else {
  return false
}
}



 /*query => {
    let question = Object.keys(query)[0],
        answer = query[question],
        allQuestions = Object.keys(allAnswers);

    let index = allQuestions.indexOf(question);
    if (index!==-1){
        if(allAnswers[allQuestions[index]]=== answer)
        return true;
    }

        return false;


}*/
