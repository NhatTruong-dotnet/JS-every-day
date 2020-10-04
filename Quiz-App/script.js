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
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn =document.getElementById("submitBtn");
let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz['question'];
    a_text.innerHTML = currentQuiz['a'];
    b_text.innerHTML = currentQuiz['b'];
    c_text.innerHTML = currentQuiz['c'];
    d_text.innerHTML = currentQuiz['d'];
}

submitBtn.addEventListener('click', ()=>{
    currentQuestion++;
    if (currentQuestion < quizData) {
        loadQuiz();
    }
    else{
        alert("Bạn đã chơi xong, vui lòng chơi lại");
    }
    
});