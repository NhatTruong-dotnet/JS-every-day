const quizData = [
    {
        question:'Học rớt thì phải làm gì?',
        a: 'Đóng tiền học lại',
        b: 'Đấm giáo viên',
        c: 'Ăn vạ xin qua môn',
        d:'Đốt trường',
        correct: 'a'
    },
    {
        question:'Ngôn ngữ lập trình nào phổ biến nhất theo thống kê năm 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d:'JavaScript',
        correct: 'd'
    },
    {
        question:'Ai hiện tại đang là tổng thống Mỹ',
        a: 'Donald Trump',
        b: 'Ivan Saldano',
        c: 'Mr. Trần Dần',
        d:'Florin Pop',
        correct: 'b'
    },
    {
        question:'HTML là viết tắt của',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d:'Helicopters Termials Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question:'JavaScipts được ra đời vào năm nào',
        a: '1996',
        b: '1995',
        c: '1994',
        d:'Năm khác',
        correct: 'b'
    },
];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn =document.getElementById("submitBtn");

let currentQuestion = 0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz['question'];
    a_text.innerHTML = currentQuiz['a'];
    b_text.innerHTML = currentQuiz['b'];
    c_text.innerHTML = currentQuiz['c'];
    d_text.innerHTML = currentQuiz['d'];
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=>{
    let answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuestion].correct)
        {
            score++;  
        }
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuiz();
            }
            else{
                quiz.innerHTML =`<h2>You answer correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
            }
        
    }
});