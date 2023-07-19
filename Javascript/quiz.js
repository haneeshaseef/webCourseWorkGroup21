const questions = {
  1: "Which country hosted the 2022 FIFA World Cup?",
  2: "Who is the youngest player to ever score in a World Cup tournament?",
  3: "Which player holds the record for the most goals scored in a single Premier League season?",
  4: "Who is the all-time top scorer for the Portuguese national team?",
  5: "Which country hosted the 2021 Copa America, which was won by Argentina?",
  6: "Which player scored the winning goal for Italy in the final of Euro 2020 against England?",
  7: "Which player won the 2021 Ballon d’Or, his seventh such award?",
  8: "Which country produces most of the world's footballs?",
  9: "What colour stripes does the Argentinian team wear?",
  10: "What is the name of the official match ball for the 2022 World Cup?",
};

const Answers = {
  1: {
    1: "Spain",
    2: "Germany",
    3: "Qatar",
    4: "France",
  },
  2: {
    1: "Critiano Ronaldo",
    2: "Pele",
    3: "Zinedine Zidane",
    4: "Diego Maradona",
  },
  3: {
    1: "George Best",
    2: "Andres Iniesta",
    3: "Karim Benzema",
    4: "Mohamed Salah",
  },
  4: {
    1: "Cristiano Ronaldo",
    2: "Pepe",
    3: "Rui Costa",
    4: "Luís Figo",
  },
  5: {
    1: "Greece",
    2: "Belgium",
    3: "Brazil",
    4: "Portugal",
  },
  6: {
    1: "Donnarumma",
    2: "Leonardo Bonucci",
    3: "Toloi",
    4: "Christante",
  },
  7: {
    1: "Karim Benzema",
    2: "Robert Lewandowsk",
    3: "Lionel Messi",
    4: "Gavi ",
  },
  8: {
    1: "Germany",
    2: "India",
    3: "Italy",
    4: "Pakistan",
  },
  9: {
    1: "yellow and green",
    2: "Blue and white",
    3: "Red and white",
    4: "Green and red",
  },
  10: {
    1: "Teamgeist",
    2: "Al Rihla",
    3: "Brazuca",
    4: "Jo'bulani",
  },
};

const correctAnswers = {
  1: "Qatar",
  2: "Pele",
  3: "Mohamed Salah",
  4: "Cristiano Ronaldo",
  5: "Brazil",
  6: "Leonardo Bonucci",
  7: "Lionel Messi",
  8: "Pakistan",
  9: "Blue and white",
  10: "Al Rihla",
};

document.addEventListener("DOMContentLoaded", () => {
  let quizCount = 1;
  let quizleft = 10;
  let correctAnswerCount = 0;
  let buttons = document.querySelectorAll("button");

  let quizTimer = setInterval(() => {
    document.getElementById("questioncount").innerHTML = quizCount + " /10";
    let timeleft = 10;
    let timer = setInterval(function () {
      document.getElementById("time").innerHTML = timeleft;
      timeleft--;
      if (timeleft == 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = timeleft;
        buttons.forEach((button) => {
          button.style.backgroundColor = "";
          button.style.color = "black"
        });
      }
    }, 1000);

    document.getElementById("question").innerHTML =
      quizCount + ". " + questions[quizCount];
    for (j = 1; j <= 4; j++) {
      document.getElementById("answer" + j).innerHTML = Answers[quizCount][j];
    }

    let clicked = false;
    
    function handleClick(e) {
        if (!clicked) {
          clicked = true;

          buttons.forEach((button)=>{
            let getText = button.innerHTML

            let keys = Object.keys(correctAnswers);
            keys.forEach((key)=>{
                if(getText === correctAnswers[key]){
                    button.style.backgroundColor = "green";
                    button.style.color = "white"
                }
            }) 
          })
      
          let getAnswer = e.target.innerHTML;
      
          if (Object.values(correctAnswers).includes(getAnswer)) {
            e.target.style.backgroundColor= "green";
            correctAnswerCount++;
          } else {
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white";
          }
        }
    }

    
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    quizCount++;
    quizleft--;
    if (quizleft == 0) {
      clearInterval(quizTimer);
      setTimeout(()=>{
        document.getElementById('viewScore').innerHTML = "View my score"
        document.getElementById('viewScore').classList.add("viewScore")
      },10000)
      
    }
  }, 10000);

  function viewPopUp(){
    console.log("hello")
  }
  
  document.getElementById("viewScore").addEventListener("click",viewPopUp)
});


