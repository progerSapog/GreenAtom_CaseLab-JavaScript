var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()

        //Проверка что остались попытки
        if (this.tries === 0)
        {
            console.log("Игра окончена");
            alert("Игра окончена");
            return
        }

        // Проверка ответа
        if (guessedAnswer.toLowerCase().includes(this.correctAnswer))
        {
            console.log("Правильный ответ");
            alert("Правильный ответ");
        }
        else
        {
            console.log("Неправильный ответ");
            alert("Неправильный ответ");

            // В заднии сказано: Предоставить пользователю подсказки после первых двух неправильных ответов.
            // В предоставленом в видео решении подсказка выводится и после 1ого неправильного ответа
            // Старался сделать 'по заданию' (хотя разница невелика и не критична)
            // и лампочка НЕ съедобная, и это Не фрукт :)
            if (--this.tries === 1) alert("Подсказки: " + this.hints.join(", "));
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}
