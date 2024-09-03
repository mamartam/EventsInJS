let pageContainer = document.createElement("div");
pageContainer.setAttribute('class', 'page');
document.body.appendChild(pageContainer);

let generalContainer = document.createElement('div');
generalContainer.setAttribute('class', 'generalContainer');
pageContainer.appendChild(generalContainer);

let questionTitle = document.createElement('p');
questionTitle.setAttribute('class', 'questionTitle');
questionTitle.innerText = "General Questions";
questionTitle.style.textAlign = 'center';
generalContainer.appendChild(questionTitle);

let questionContainer1 = document.createElement('div');
questionContainer1.setAttribute('class', 'questionContainer1');
generalContainer.appendChild(questionContainer1);

let question1 = document.createElement('div');
question1.setAttribute('class', 'question1');
questionContainer1.appendChild(question1);

let firstQuestion = document.createElement('p');
firstQuestion.innerText = "Do you accept all major credit cards?";
question1.appendChild(firstQuestion);

let pluss = document.createElement('p');
// pluss.setAttribute('id', 'pluss');
pluss.innerText = '+';
question1.appendChild(pluss);
pluss.style.cursor = 'pointer';

let answer1 = document.createElement('div');
answer1.setAttribute('class', 'answer1');
questionContainer1.appendChild(answer1);


let answerToFirstQuestion = document.createElement('p');
answerToFirstQuestion.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae cumque sint, perferendis totam sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae cumque sint, perferendis totam sit!';
answer1.appendChild(answerToFirstQuestion);


pluss.addEventListener('click', function () {

    if (pluss.innerText === '+') {
        pluss.innerText = '-';
        answer1.style.display = 'block';
    }
    else if (pluss.innerText === '-') {
        pluss.innerText = '+';
        answer1.style.display = 'none';

    }
})

// ----------------------------------------------------------
let questionContainer2 = document.createElement('div');
questionContainer2.setAttribute('class', 'questionContainer2');
generalContainer.appendChild(questionContainer2);

let question2 = document.createElement('div');
question2.setAttribute('class', 'question2');
questionContainer2.appendChild(question2);

let secondQuestion = document.createElement('p');
secondQuestion.innerText = "Do you support local farmers?";
question2.appendChild(secondQuestion);

let pluss2 = document.createElement('p');
pluss2.setAttribute('id', 'pluss2');
pluss2.style.cursor = 'pointer';
pluss2.innerText = '+';
question2.appendChild(pluss2);



let answer2 = document.createElement('div');
answer2.setAttribute('class', 'answer2');
questionContainer2.appendChild(answer2);

let answerToSecondQuestion = document.createElement('p');
answerToSecondQuestion.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis beatae cumque sint, perferendis totam sit!';
answer2.appendChild(answerToSecondQuestion);

pluss2.addEventListener('click', function () {

    if (pluss2.innerText === '+') {
        pluss2.innerText = '-';
        answer2.style.display = 'block';
    }
    else if (pluss2.innerText === '-') {
        pluss2.innerText = '+';
        answer2.style.display = 'none';

    }
})



// let firstQuestionContainer = document.createElement('div');
// firstQuestionContainer.setAttribute('class', 'firstQuestionContainer');
// generalContainer.appendChild(firstQuestionContainer);

// let firstQuestion = document.createElement('p');
// firstQuestion.innerText = "Do you accept all major credit cards?";
// firstQuestionContainer.appendChild(firstQuestion);

// let breakk = document.createElement('div');
// breakk.setAttribute('class', 'breakk');
// firstQuestionContainer.appendChild(breakk);




