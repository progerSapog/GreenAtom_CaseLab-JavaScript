function clickCounter(event)
{
    btn = event.target;
    btn.setAttribute('data-clicked', +btn.getAttribute('data-clicked') + 1)
}

const buttons = document.getElementsByTagName('button')
for (let btn of buttons) btn.addEventListener('click', clickCounter)
