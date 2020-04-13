export function saveAnswer(myQuestions) {
    let corrects = [];
    let jawapan = [];
    let indicators = 0;
    let weightages = 0;
    let skormessage = "";
  
    for (let i = 0; i < myQuestions.length; i++) {
      let q = myQuestions[i];
  
      if (!q.answer) {
        corrects[i] = 0;
        continue;
      }
  
      corrects[i] = q.correctAnswer === q.answer ? 1 : 2;
      if (q.correctAnswer === q.answer) {
        weightages += q.weightage;
        indicators += q.indicator;
      }
      jawapan[i] = q.answer;
    }
  
    if (indicators >= 3) weightages = 100;
  
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
      answertwelve: jawapan[11]
    };
    let answerMessage = JSON.stringify(answers);
    //sessionStorage.setItem("answers", answerMessage);
  
    answers.weightages = weightages;
    answers.indicators = indicators;    
  
    let string = JSON.stringify(answers);
    console.log(string);
  
    if (weightages == 0) {
      skormessage =
        "Syabas! Kesihatan periodontal anda adalah sempurna. Teruskan usaha menjaga gigi dan gusi anda";
    } else if (weightages < 10) {
      skormessage =
        "Bagus! Kesihatan periodontal anda hampir sempurna. Teruskan usaha menjaga gigi dan gusi anda";
    } else if (weightages < 40) {
      skormessage =
        "Agak baik! Kesihatan periodontal anda baik tetapi memerlukan pemantauan. Teruskan usaha menjaga gigi dan gusi anda";
    } else if (weightages < 50) {
      skormessage =
        "Berhati-hati! Anda mempunyai hampir separuh simtom-simtom penyakit gusi. Sila berjumpa doktor gigi anda";
    } else if (weightages >= 50 && weightages <= 90) {
      skormessage =
        "Tidak baik! Anda menunjukkan lebih separuh simtom-simtom penyakit gusi. Sila berjumpa doktor gigi anda secepat mungkin";
    } else {
      skormessage = "Kritikal! Sila berjumpa doktor gigi anda SEGERA!";
    }  
    
  
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json;"
      },
      body: string
    };
    var url = "https://localhost:5001/api/ujiandua";
  
    fetch(url, options).catch(err => {
      console.error("Request failed", err);
    });
  
    return { weightages, skormessage };
  }