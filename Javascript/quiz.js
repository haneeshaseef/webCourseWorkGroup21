//Javascript object which contains the questions for quiz
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

//Javascript object which contains the answers for the quiz
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

//Javascript object which contains the correct answers of the quiz
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
  // Declare variables for quiz count, quiz left, wrong answer count and buttons
  let quizCount = 1;
  let quizleft = 10;
  let wrongAnswerCount = 0;
  let buttons = document.querySelectorAll("button");

  // Set a timer for the quiz of 10 seconds for each question
  let quizTimer = setInterval(() => {
    // Display the quiz count out of 10
    document.getElementById("questioncount").innerHTML = quizCount + " /10";
    // Set a variable for time left and display it
    let timeleft = 10;
    let timer = setInterval(() => {
      document.getElementById("time").innerHTML = timeleft;
      // Decrease the time left by one every second
      timeleft--;
      // If the time left is zero, clear the timer and reset the button styles
      if (timeleft == 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = timeleft;
        buttons.forEach((button) => {
          button.style.backgroundColor = "";
          button.style.color = "black";
        });
      }
    }, 1000);

    // Display the question and the answers from the questions and Answers arrays
    document.getElementById("question").innerHTML =
      quizCount + ". " + questions[quizCount];
    for (j = 1; j <= 4; j++) {
      document.getElementById("answer" + j).innerHTML = Answers[quizCount][j];
    }

    // Declare a variable to check if the user has clicked an answer
    let clicked = false;

    // Define a function to handle the click event on the buttons
    function handleClick(e) {
      // If the user has not clicked an answer yet, set clicked to true
      if (!clicked) {
        clicked = true;

        // Loop through all the buttons and check if they match the correct answers from the correctAnswers object
        buttons.forEach((button) => {
          let getText = button.innerHTML;

          let keys = Object.keys(correctAnswers);
          keys.forEach((key) => {
            // If the button matches a correct answer, change its background color to green and text color to white
            if (getText === correctAnswers[key]) {
              button.style.backgroundColor = "green";
              button.style.color = "white";
            }
          });
        });

        // Get the answer from the clicked button
        let getAnswer = e.target.innerHTML;

        // If the answer is correct, change its background color to green
        if (Object.values(correctAnswers).includes(getAnswer)) {
          e.target.style.backgroundColor = "green";
        } else {
          // If the answer is wrong, change its background color to red, text color to white and increase the wrong answer count by one
          e.target.style.backgroundColor = "red";
          e.target.style.color = "white";
          wrongAnswerCount++;
        }
      }
    }

    // Add an event listener for each button to call the handleClick function when clicked
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    // Increase the quiz count by one and decrease the quiz left by one
    quizCount++;
    quizleft--;
    // If there are no more quizzes left, clear the quiz timer and display a button to view the score after 10 seconds
    if (quizleft == 0) {
      clearInterval(quizTimer);
      setTimeout(() => {
        document.getElementById("viewScore").innerHTML = "View my score";
        document.getElementById("viewScore").classList.add("viewScore");
      }, 10000);
    }
  }, 10000);

  // Add an event listener for the view score button to call the viewPopUp function when clicked
  document.getElementById("viewScore").addEventListener("click", viewPopUp);

  // Declare a variable for the quiz score view element
  let quizScoreView = document.getElementById("quizScoreView");
  // Define a function to display the quiz score view as a pop up
  function viewPopUp() {
    // Set the display style of the quiz score view to block
    quizScoreView.style.display = "block";
    // Display the wrong answer count
    document.getElementById("correctAnswerCount").innerHTML =
      "wrong Answers :" + wrongAnswerCount;

    // Calculate and display the score as a percentage of correct answers out of 10
    let correctAnswerCount = 10 - wrongAnswerCount;
    document.getElementById("score").innerHTML =
      "Score : " + (correctAnswerCount / 10) * 100;

    // Declare a variable for the progress element and display a message based on the score
    let progress = document.getElementById("progress");

    if (correctAnswerCount >= 4) {
      progress.innerHTML = "you are doing well. Keep it up!";
      progress.style.color = "green";
    } else {
      progress.innerHTML = "Try your best!";
      progress.style.color = "red";
    }
  }

  // Declare a variable for the close button and add an event listener to close the pop up when clicked
  let close = document.getElementById("closeBtn");
  close.onclick = function () {
    quizScoreView.style.display = "none";
  };

  // Add an event listener to close the pop up when the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == quizScoreView) {
      quizScoreView.style.display = "none";
    }
  };
});
