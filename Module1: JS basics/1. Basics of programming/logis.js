/**
 * author: Сапожников Владислав
 * release: 21.12.21
 */
const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

/**
 * Сообщает угадал ли пользователь число
 *
 * @param num - переданное число ("нажатая кнопка") *
*/
function guessNum(num)
{
    //контроль кол-ва ошибок
    if (tries >= 5)
    {
        alert("Попытки закончились!")
        return
    }

    //сообщение угадали/неугадали
    if (num === secretNum) alert("Вы угадали число!")
    else alert("Вы не угадали. Осталось попыток: " + (5 - ++tries))
}
