const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', submit)

function submit(event)
{
    event.preventDefault();
    check()
}

//Проверка данных
function check()
{
    let isLogin = false;    //флаг верных данных
    const allInput = []     //массив для веденных данных

    //Сначала проверям, что поля не пустые
    for (let input of inputs)
    {
        if (!input.value.trim())
        {
            console.log('fields are required');
            alert('fields are required');
            return
        }
    }

    //Из введеных данных получаем массив строк
    inputs.forEach(x => allInput.push(x.value))

    //сравниваем массив веденных строк с массивами зарегистрированных
    //пользователей
    for (let user of registeredUsers)
    {
        //кривой способ сравнить массивы
        if (JSON.stringify(user) === JSON.stringify(allInput))
        {
            console.log("successful login");
            alert("successful login");
            isLogin = true
            form.reset();
            return
        }
    }

    //если данные не совпали - сообщаем об этом.
    if (!isLogin)
    {
        console.log("bad credentials");
        alert("bad credentials");
    }
}
