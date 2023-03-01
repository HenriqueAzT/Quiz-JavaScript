const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const correctAnswers = ['A', 'B', 'B', 'D']

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${1 + index}`].value)


const scoreCalculator = (event) => {
    event.preventDefault()
    let score = 0

    // Obtém as respostas do usuário
    const userAnswers = getUserAnswers()


    const addScore = () => {
        return score += 25
    }

    const setScore = () => {
        finalScoreContainer.querySelector('span').textContent = `${counter}%`
        counter++
    }

    const iterateThroughArray = (userAnswer, index) => {
        const validateAnswer = userAnswer === correctAnswers[index]
        if (validateAnswer) {
            addScore()
        }
    }

    userAnswers.forEach(iterateThroughArray)
    
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
    finalScoreContainer.classList.remove('d-none')

    let counter = 0
    const stopCounter = () => {
        const validateScore = counter === score
        if (validateScore) {
            clearInterval(timer)
        }
        setScore()
    }
    const timer = setInterval(stopCounter, 14);
}

form.addEventListener('submit', scoreCalculator)
