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
  
    let message = (final === "")
      ? "Please answer at least one question!"
      : "You are most like " + final + "! 🎉";
  
    // zprava pro modal
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
  
    // modalni okno
    const modal = document.getElementById('resultModal');
    modal.style.display = "block";
  
    // ✨ Automatický scroll dolů k výsledku
    modal.scrollIntoView({ behavior: "smooth" });
  
    // zavreni okna, kdyz se klikne na close
    document.getElementById('closeModalBtn').addEventListener('click', function() {
      modal.style.display = "none";
    });
  }
  
  //  zavreni modalniho okna, kdyz se klikne mimo
  window.onclick = function(event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  function restartQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.getElementById("result").textContent = "";
  }
  








