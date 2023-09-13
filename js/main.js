const { createApp } = Vue

createApp({
    data() {
        return {
            userPoints: 0,
            gameActive: true,
            currentQuestion: '',
            currentOptions: [],
            datas: [
                {
                    question: 'Qual è la capitale della Spagna?',
                    options: [
                        {
                            text: 'Valencia',
                            result: false
                        },
                        {
                            text: 'Barcellona',
                            result: false
                        },
                        {
                            text: 'Madrid',
                            result: true
                        },
                        {
                            text: 'Ibiza',
                            result: false
                        }
                    ]
                },
                {
                    question: 'In che anno Cristoforo Colombo sbarcò in America?',
                    options: [
                        {
                            text: '1538',
                            result: false
                        },
                        {
                            text: '1492',
                            result: true
                        },
                        {
                            text: '1945',
                            result: false
                        },
                        {
                            text: '1388',
                            result: false
                        }
                    ]
                },
                {
                    question: 'Di che colore è il Golden Bridge di San Francisco?',
                    options: [
                        {
                            text: 'Rosso',
                            result: true
                        },
                        {
                            text: 'Oro',
                            result: false
                        },
                        {
                            text: 'Giallo',
                            result: false
                        },
                        {
                            text: 'Blu',
                            result: false
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        playStart() {
            const playBtnDom = document.getElementById('play-btn');
            const gameDom = document.querySelector('.game');

            playBtnDom.classList.add('d-none');
            gameDom.classList.remove('d-none');


            const questionsToDo = this.generateQuestionsList();

            console.log(questionsToDo);

            if (this.gameActive) {
                this.currentQuestion = questionsToDo[0].question;
                for (let i = 0; i < questionsToDo[0].options.length; i++) {
                    this.currentOptions.push(questionsToDo[0].options[i]);
                }
            }

            console.log(this.currentOptions)

        },
        gameResult(index) {
            const optionsDom = document.querySelectorAll('.options .text')
            if (this.currentOptions[index].result == false) {
                console.log('falso')
                optionsDom[index].classList.add('red')

                // this.gameResult = false;
            } else {
                console.log('vero')
                optionsDom[index].classList.add('green')
                this.userPoints++;
            }
        },
        generateQuestionsList() {
            // array delle domande selezionate randomicamente
            const questions = [];
            // ciclo per la selezione delle domande
            while (questions.length < this.datas.length) {
                let singleQuestion = this.datas[this.generateRandomNumber(0, this.datas.length - 1)];
                if (!questions.includes(singleQuestion)) {
                    questions.push(singleQuestion);
                }
            }

            return questions;
        },
        generateRandomNumber(min, max) {
            if (min >= max) {
                throw new Error('Il valore minimo deve essere inferiore al valore massimo.');
            }

            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }
    }
}).mount('#app')