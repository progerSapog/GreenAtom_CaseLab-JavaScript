function censor()
{
    //Массив для хранения пар, переданных как 2 аргумента
    const pairArr = [];

    /**
     * Работает по разному в зависимости от кол-ва параметров:
     *   1 параметр  - замена слов в переданной строке соглсано парам
     *   2 параметра - запись данной пары слов в массив пар
    */
    function pushPair(el1, el2 = undefined)
    {
        //1 параметр - замена слов
        if (typeof el2 === 'undefined')
        {
            for (let pair of pairArr)
            {
                //если строк содержит первый элемент из пары, то делаем замену
                if (el1.includes(pair[0]))
                {
                    el1 = el1.replace(new RegExp(pair[0], "ig"), pair[1]);
                }
            }
            return el1;
        }
        //Дdа параметра - записываем пару
        else
        {
            pairArr.push([el1, el2])
        }
    }

    return pushPair;
}


const changeScene = censor();

changeScene('PHP','JS');

changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'));
