export function saveAnswer(myQuestions) {
  let jawapan = [];
  let weightages = 0;
  let skormessage = "";
  let indexscore = 0;
  let initialbmi ="";
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
  };
  initialbmi = sessionStorage.getItem("bmi");
  answers.bmi = parseFloat(initialbmi);
  if (answers.bmi < 23) {
    answers.answereight = 0;
  } else if (answers.bmi >= 23 && answers.bmi <= 27.49) {
    answers.answereight = 1;
  } else {
    answers.answereight = 3;
  }

  answers.indexscore = indexscore;
  let answerMessage = JSON.stringify(answers); //

  console.log(answerMessage);

  if (indexscore < 6) {
    skormessage =
      "<strong>Rendah:</strong> dianggarkan 1 dalam 100 orang akan menghidapi penyakit ini";
  } else if (indexscore >= 7 && indexscore <= 11) {
    skormessage =
      "<strong>Sedikit tinggi:</strong> dianggarkan 1 dalam 25 orang akan menghidapi penyakit ini";
  } else if (indexscore >= 12 && indexscore <= 14) {
    skormessage =
      "<strong>Sederhana:</strong> dianggarkan 1 dalam 6 orang akan menghidapi penyakit ini";
  } else if (indexscore >= 15 && indexscore <= 20) {
    skormessage =
      "<strong>Tinggi:</strong> dianggarkan 1 dalam 3 orang akan menghidapi penyakit ini";
  } else {
    skormessage = "<strong>Sangat tinggi:</strong> dianggarkan 1 dalam 2 orang akan menghidapi penyakit ini";
  }




  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json;",
    },
    body: answerMessage,
  };
  var url = "https://localhost:5001/api/ujiansatu";

  fetch(url, options).catch((err) => {
    console.error("Request failed", err);
  });

  return { indexscore, skormessage };
}
