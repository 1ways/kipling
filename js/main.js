const DATA = [
	{
		question: "В каком году родился Редьярд Киплинг?",
		answers: [
			{
				id: "1",
				value: "В 1865 году",
				correct: true,
			},
			{
				id: "2",
				value: "В 1805 году",
				correct: false,
			},
			{
				id: "3",
				value: "В 1910 году",
				correct: false,
			},
		],
	},
	{
		question: "Какое произведение Киплинга считается лучшим?",
		answers: [
			{
				id: "4",
				value: "Книга джунглей",
				correct: true,
			},
			{
				id: "5",
				value: "Приключение маугли",
				correct: false,
			},
			{
				id: "6",
				value: "Сказки просто так",
				correct: false,
			},
		],
	},
	{
		question:
			"В какой стране происходит история, описанная в сборнике 'Книга джунглей'?",
		answers: [
			{
				id: "7",
				value: "В Китае",
				correct: false,
			},
			{
				id: "8",
				value: "В Индии",
				correct: true,
			},
			{
				id: "9",
				value: "В Японии",
				correct: false,
			},
		],
	},
	{
		question: "Как называется рассказ, в котором описано детство Киплинга?",
		answers: [
			{
				id: "10",
				value: "Реформаторы нравственности",
				correct: false,
			},
			{
				id: "11",
				value: "Наши предки",
				correct: false,
			},
			{
				id: "12",
				value: "Ме-е, парвшивая овца",
				correct: true,
			},
		],
	},
	{
		question:
			"Имя какого героя стало нарицательным и широко используется в наше время для обозначения детей, выросших без людского влияния?",
		answers: [
			{
				id: "13",
				value: "Балу",
				correct: false,
			},
			{
				id: "14",
				value: "Шер-Хан",
				correct: false,
			},
			{
				id: "15",
				value: "Маугли",
				correct: true,
			},
			{
				id: "16",
				value: "Табаки",
				correct: false,
			},
		],
	},
	{
		question: "По какому произведению был снят мультфильм Disney?",
		answers: [
			{
				id: "17",
				value: "Книга джунглей",
				correct: true,
			},
			{
				id: "18",
				value: "Сказки старой Англии",
				correct: false,
			},
			{
				id: "19",
				value: "Награды и Феи",
				correct: false,
			},
		],
	},
	{
		question:
			"В каком произведении описана жизнь Киплинга в частной английской школе-интернате?",
		answers: [
			{
				id: "20",
				value: "Труды дня",
				correct: false,
			},
			{
				id: "21",
				value: "Пять наций",
				correct: false,
			},
			{
				id: "22",
				value: "Сталки и компания",
				correct: true,
			},
			{
				id: "23",
				value: "Пак с Холмов Пука",
				correct: false,
			},
		],
	},
	{
		question: "Кем не был Редьярд Киплинг?",
		answers: [
			{
				id: "24",
				value: "Писателем",
				correct: false,
			},
			{
				id: "25",
				value: "Поэтом",
				correct: false,
			},
			{
				id: "26",
				value: "Художником",
				correct: true,
			},
		],
	},
	{
		question: "Кем стал работать Редьярд, вернувшись после обучения в Индию?",
		answers: [
			{
				id: "27",
				value: "Преподавателем",
				correct: false,
			},
			{
				id: "28",
				value: "Инженером",
				correct: false,
			},
			{
				id: "29",
				value: "Журналистом",
				correct: true,
			},
			{
				id: "30",
				value: "Писателем",
				correct: false,
			},
		],
	},
	{
		question: "Где путешествовал Киплинг в середине 1880-х?",
		answers: [
			{
				id: "31",
				value: "США и Азия",
				correct: true,
			},
			{
				id: "32",
				value: "Россия",
				correct: false,
			},
			{
				id: "33",
				value: "Канада и США",
				correct: false,
			},
			{
				id: "34",
				value: "Япония и Китай",
				correct: false,
			},
		],
	},
	{
		question: "Как называется первый опубликованный роман Киплинга?",
		answers: [
			{
				id: "35",
				value: "Баллада о Востоке и Западе",
				correct: false,
			},
			{
				id: "36",
				value: "Свет погас",
				correct: true,
			},
			{
				id: "37",
				value: "Отважные мореплаватели",
				correct: false,
			},
			{
				id: "38",
				value: "Семь морей",
				correct: false,
			},
		],
	},
	{
		question: "С какой выдающейся личностью Киплинга связывала крепкая дружба?",
		answers: [
			{
				id: "39",
				value: "Черчиль",
				correct: false,
			},
			{
				id: "40",
				value: "Георг V",
				correct: true,
			},
			{
				id: "42",
				value: "Сталин",
				correct: false,
			},
			{
				id: "43",
				value: "Махатма Ганди",
				correct: false,
			},
		],
	},
];

let localResults = {};
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const results = document.getElementById("results");
const btnCheck = document.getElementById("btn-check");
const btnRestart = document.getElementById("btn-restart");

const renderQuestions = () => {
	let content = "";
	for (index in DATA) {
		const renderAnswers = () =>
			DATA[index].answers
				.map(
					answer => `
                    <li>
                        <label>
                            <input class="answer-input" type="radio" name=${index} value=${answer.id} />
                            ${answer.value}
                        </label>
                    </li>
                `
				)
				.join("");
		content += `
            <div class="quiz__questions-item">
                <div class="quiz__questions-item-question">
                    ${DATA[index].question}
                </div>
                <ul class="quiz__questions-item-answers">${renderAnswers()}</ul>
            </div>
        `;
	}
	questions.innerHTML = content;
};
const renderResults = () => {
	let content = "";

	const getClassName = (answer, questionIndex) => {
		let className = "";

		if (!answer.correct && answer.id === localResults[questionIndex]) {
			className = "answer--invalid";
		} else if (answer.correct) {
			className = "answer--valid";
		}

		return className;
	};

	const getAnswers = questionIndex =>
		DATA[questionIndex].answers
			.map(
				answer =>
					`<li class=${getClassName(answer, questionIndex)}>${
						answer.value
					}</li>`
			)
			.join("");

	DATA.forEach((question, index) => {
		console.log(question);
		content += `
            <div class="quiz__results-item">
                <div class="quiz__results-item-question">
                    ${question.question}
                </div>
                <ul class="quiz__results-item-answers">${getAnswers(index)}</ul>
            </div>
        `;
	});

	results.innerHTML = content;
};
let resultIndex = 0;
quiz.addEventListener("change", event => {
	if (event.target.classList.contains("answer-input")) {
		resultIndex += 1;
		console.log(event.target.name);
		localResults[event.target.name] = event.target.value;
		if (resultIndex == event.target.name) {
			resultIndex -= 1;
		}
		if (resultIndex == DATA.length) {
			btnCheck.disabled = false;
		}
	}
});
quiz.addEventListener("click", event => {
	if (event.target.classList.contains("btn-check")) {
		renderResults();
		questions.classList.add("questions--hidden");
		results.classList.add("results--visible");
		btnCheck.classList.add("btn-check--hidden");
		btnRestart.classList.add("btn-restart--visible");
	}
	if (event.target.classList.contains("btn-restart")) {
		localResults = {};
		results.innerHTML = "";
		questions.classList.remove("questions--hidden");
		results.classList.remove("results--visible");
		btnCheck.classList.remove("btn-check--hidden");
		btnRestart.classList.remove("btn-restart--visible");
		renderQuestions();
		btnCheck.disabled = true;
	}
});
renderQuestions();
