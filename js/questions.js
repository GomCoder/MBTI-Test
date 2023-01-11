import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const qeustionEl = document.querySelector('.question');
const choise1El = document.querySelector('.choice1');
const choise2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';

//질문 페이지 랜더링 함수
function renderQuestion() {
    const question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    qeustionEl.innerHTML = question.question;
    choise1El.innerHTML = question.choices[0].text;
    choise2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%';
}

//다음 질문으로 넘어가는 함수
function nextQuestion(choiceNumber) {
    if (currentNumber === questions.length - 1) { //10번째 질문이라면 결과 페이지로 이동
        showResultPage();
        return;
    }
    const question = questions[currentNumber];
    mbti = mbti + question.choices[choiceNumber].value;
    currentNumber = currentNumber + 1;
    renderQuestion();
}

//결과 페이지를 보여주는 함수
function showResultPage() {
    location.href = './results.html?mbti=' + mbti; //쿼리 스트링
}

//답변을 틀릭했을 떄의 이벤트
choise1El.addEventListener('click', function() {
    nextQuestion(0);
})

choise2El.addEventListener('click', function() {
    nextQuestion(1);
})

renderQuestion();