export function saveAnswer(myQuestions){

    let jawapan = [];    
    let weightages = 0;
    let skormessage = "Index Literasi Kesihatan Anda:";
    let indexscore = 0;
    // let minuser = 0;

    for (let i = 0; i < myQuestions.length; i++) {

        let q = myQuestions[i];
        weightages += q.answer;
        jawapan[i] = q.answer;
        
    }
    // minuser = weightages/18;
    // indexscore = (minuser-1)*(50/3);
    indexscore = weightages;

    const answers = {
        answerone: jawapan[0],
        answertwo: jawapan[1],
        answerthree: jawapan[2],
        answerfour: jawapan[3],
        answerfive: jawapan[4],
        answersix: jawapan[5],
        answerseven: jawapan[6],
        answereight: jawapan[7],
        answernine: jawapan[8],
        answerten: jawapan[9],
        answereleven: jawapan[10],
        answertwelve: jawapan[11],
        answerthirteen: jawapan[12],
        answerfourteen: jawapan[13]
      };
        answers.indexscore = indexscore;
        let answerMessage = JSON.stringify(answers);//   
   
   console.log(answerMessage);

   const options = {
    method: "post",
    headers: {
      "Content-type": "application/json;"
    },
    body: answerMessage
  };
  var url = "https://localhost:5001/api/ujianempat";

  fetch(url, options).catch(err => {
    console.error("Request failed", err);
  });


    return { indexscore, skormessage };
}