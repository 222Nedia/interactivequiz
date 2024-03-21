document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of Germany?",
            options: ["Berlin", "Tokyo", "Dublin", "Krakow"],
            correctAnswer: "Berlin",
    },
    
        {   question: "Emerald is a shade of which colour?",
            options: ["Blue", "Yellow", "Green", "Black"],
            correctAnswer: "Green",
    },

        {   question: "Which country has won the most World Cups?",
            options: ["France", "Uraguay", "Italy", "Brazil"],
            correctAnswer: "Brazil",
    },
        {   question: "Which planet has the most moons?",
            options: ["Earth", "Saturn", "Neptune", "Jupiter"],
            correctAnswer: "Saturn",
    },
        {   question: "Which painter famously cut off his own ear?",
            options: ["Shakespeare", "Picasso", "Da vinci", "Van-Gogh"],
            correctAnswer: "Van-Gogh",
    },
    {   question: "People born between Novermber 22 & December 21st would be which Star Sign?",
            options: ["Cancer", "Taurus", "Pisces", "Sagittarius"],
            correctAnswer: "Sagittarius",
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1915", "1920"],
        correctAnswer: "1912",
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "In what year did the first manned moon landing occur?",
        options: ["1962", "1969", "1975", "1981"],
        correctAnswer: "1969",
    },
    {
        question: "What is the world's largest coral reef system?",
        options: ["Great Barrier Reef", "Maldives Reef", "Red Sea Coral Reef", "Andaman Coral Reef"],
        correctAnswer: "Great Barrier Reef",
    },
    {
        question: "What is the largest country in the world by land area?",
        options: ["Russia", "Canada", "USA", "China"],
        correctAnswer: "Russia",
    },


];
    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionElement = document.getElementById('question');
        const optionsContainer = document.getElementById('quiz-options');

        questionElement.textContent = quizData[currentQuestion].question;

        optionsContainer.innerHTML = "";

        quizData[currentQuestion].options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button')
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);

        document.getElementById('yourScore').textContent = "Current Score: " + score;   
        }); 
        
    }
    // Check if the answer selected is correct or not then give feedback.
    function checkAnswer(selectedOption) {
        const correctAnswer = quizData[currentQuestion].correctAnswer;
        
        if(selectedOption === correctAnswer) {
            score++;

            const yourScore =document.getElementById('yourScore');
            if (score <= 4) {
                yourScore.className = 'low-score';
            } else if (score <= 10) {
                yourScore.className = 'medium-score';
            } else {
                yourScore.className = 'high-score';
            }

        } else {
            console.log("Incorrect!");
        }

    // Move onto next question (input score update eventually)
    currentQuestion++;

    // Check for more questions
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        // Show final score eventually
        const totalScoreBlock = document.getElementById('totalScore');
        const quizBtn = document.getElementById('resetButton');

        // Dynamic color change depending on final score
        if (score <= 4) {
            totalScoreBlock.className = 'low-score';
        } else if (score <= 10){
            totalScoreBlock.className = 'medium-score';
        } else {
            totalScoreBlock.className = 'high-score';
        }

        quizBtn.style.display = "block";

        totalScoreBlock.textContent = "Total Score: " + score;
        totalScoreBlock.style.display = "flex";
        totalScoreBlock.style.flexDirection = "column";
        totalScoreBlock.style.textAlign = "center";
        totalScoreBlock.style.justifyContent = "center";
        totalScoreBlock.style.alignItems = "center";


        document.getElementById('yourScore').textContent = "Current Score: " + score;  
    }
}

function resetQuiz(){
    currentQuestion = 0;
    score = 0;

    const totalScoreBlock = document.getElementById('totalScore');
    totalScoreBlock.style.display = "none";

    const quizBtn = document.getElementById('resetButton');
    quizBtn.style.display = "none";

    const yourScore = document.getElementById('yourScore');
    yourScore.className = 'low-score';
    

    // Learn how to shuffle questions after reset.

    loadQuestion();

    console.log('Quiz has been reset')
}

document.getElementById('resetButton').addEventListener('click', resetQuiz);
 loadQuestion();
});