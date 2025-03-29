function calculateResult() {
    let result = {
      Anicka: 0,
      Sasa: 0,
      Sofi: 0,
      Kiki: 0
    };
  
    const answers = document.querySelectorAll('input[type="radio"]:checked');
  
    answers.forEach(answer => {
      const value = answer.value;
      if (result[value] !== undefined) {
        result[value]++;
      }
    });
  
    let max = 0;
    let final = "";
  
    for (let girl in result) {
      if (result[girl] > max) {
        max = result[girl];
        final = girl;
      }
    }
  
    const resultBox = document.getElementById("result");
  
    if (final === "") {
      resultBox.textContent = "Please answer at least one question!";
    } else {
      resultBox.textContent = "You are most like " + final + "! 🎉";
    }
  }
  

 
  function restartQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.getElementById("result").textContent = "";
  }
  








