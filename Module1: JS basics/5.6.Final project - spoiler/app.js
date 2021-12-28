const btn = document.querySelector('button')
const spoiler = document.getElementById('spoiler')

//Изначально спойлер скрыт, так что добавляем событие чтобы его показать
btn.addEventListener('click', show)

//показать спойлер
//убираем класс с эффетом скрытия для спойлера
//добавляем обработчик для скрытия
//добавляем документу обработчик клавиши Escape
//убираем обработчик нажатия для показа спойлера
function show(event)
{
    spoiler.classList.remove('closed')

    btn.addEventListener('click', hide)
    document.addEventListener('keydown', handleEscape)

    btn.removeEventListener('click', show)
}

//спрятать спойлер
//добавляем класс с эффетом скрытия для спойлера
//добавляем обработчик нажатия для показа спойлера
//удаляем  документу обработчик клавиши Escape
//удаляем обработчик для скрытия
function hide()
{
    spoiler.classList.add('closed')

    btn.addEventListener('click', show)
    document.removeEventListener('keydown', handleEscape)

    btn.removeEventListener('click', hide)
}

//Если нажата Escape - прячем спойлер
function handleEscape(event)
{
    if (event.key === 'Escape') hide()
}
