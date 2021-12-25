const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Juventus',
    },
    {
        id: 2,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Karim',
        surname: 'Benzema',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Maxi',
        surname: 'Gomez',
        club: 'Valencia',
    },
    {
        id: 5,
        name: 'Quincy',
        surname: 'Promes',
        club: 'Spartak',
    },
];

function lecSort(el1, el2)
{
    if (el1 > el2 )return 1;
    else if (el1 < el2) return -1;
    else return 0;
}

console.log(food.sort(lecSort));
console.log(players.sort((a, b) => lecSort(a.surname, b.surname)));
