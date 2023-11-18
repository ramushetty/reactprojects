const QuizModule = (function() {
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    async function fetchQuizData() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple');
            const data = await response.json();
            return data.results; // Extract the 'results' array from the response
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    }

    function displayQuestion(question) {
        const questionContainer = document.getElementById('question');
        questionContainer.innerHTML = question.question; // Display the question text

        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = ''; // Clear previous answers

        // Combine correct and incorrect answers and shuffle them
        const answers = [question.correct_answer, ...question.incorrect_answers];
        shuffleArray(answers);

        answers.forEach(answer => {
            const div = document.createElement('div');
            div.innerHTML = answer;
            div.addEventListener('click', () => selectAnswer(answer, question.correct_answer));
            answersContainer.appendChild(div);
        });
    }

    function selectAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            score++;
            updateScoreDisplay();
        }

        // Move to the next question or finish quiz
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {
            finishQuiz();
        }
    }

    function updateScoreDisplay() {
        const scoreContainer = document.getElementById('score');
        scoreContainer.innerHTML = `Score: ${score}`;
    }

    function finishQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `<h1>Quiz Completed!</h1><p>Your score: ${score}/${questions.length}</p>`;
        // Add any additional logic for finishing the quiz
    }

    // Function to shuffle the answers
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return {
        init: async function() {
            questions = await fetchQuizData();
            if (questions && questions.length > 0) {
                displayQuestion(questions[0]);
            } else {
                console.error('No questions to display');
            }
        }
    };
})();

// Initialize the quiz
document.addEventListener('DOMContentLoaded', QuizModule.init);
