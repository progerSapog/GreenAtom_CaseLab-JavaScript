const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    // TODO: если товар еще не в корзине, добавить его из массива products

    //Найдем товар и сохраним в переменную
    const item = products.find(obj => obj.id === productId)

    //если такой товар уже есть в корзине, то сообщаем об этом
    //иначе добавляем в список
    if (order.includes(item)) alert("Товар уже есть в корзине!")
    else order = [...order, item]


    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины

    //создаем новый массив без элемента с этим id
    order = order.filter(item => item.id !== productId)

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice(){
    // TODO: опишите функционал подсчета общей стоимости заказа

    //обычный подсчет суммы при помощи reduce
    const totalPrice = order.reduce((acc, item) => acc + item.price, 0)



    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}
