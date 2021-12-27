const buttons = document.getElementsByClassName('accordion')

function show()
{
    this.nextElementSibling.classList.toggle('show')
}

for (let el of buttons)
{
    el.addEventListener('click', show)
}
