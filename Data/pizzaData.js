  
var Pizzas = [
    { id: 1, description: "Пикантная пицца с ананасами и кинзой", name: "Пикантная", price: 490, picture: "https://i.pinimg.com/736x/c2/11/1a/c2111a4b0545d6aaf8e9d58f07b8d1b9--fat-bike.jpg" },
    { id: 2, description: "Эти грибочки вас не увеселят, но точно насытят!", name: "Грибная", price: 410, picture: "https://www.merida-store.ru/image/cache/data/Stels/3/STELS%20Miss%207700%20V%2026%20%282015%29-128x128.jpg" },
    { id: 3, description: "Как от мамы, только лучше", name: "Бабулина", price: 430, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 4, description: "Vegan friendly(можно также в пост)", name: "Вегетарианская", price: 390, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 5, description: "С привкусом незакрытой сессии и выдохшегося пива", 380: "Студенческая", price: 380, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 6, description: "Anti-vegan(не халяль)", name: "Мясная бомба", price: 570, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 7, description: "Для самой толстой мохнатой попки", name: "сЫЫЫЫЫЫЫрная", price: 470, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 8, description: "С четырьмя видами колбасок", name: "Баварская", price: 510, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 9, description: "Тритон отобрал самых отпетых морских гадов для этой пиццы", name: "Весёлая креветка", price: 600, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
    { id: 10, description: "Оригинальная пицца от нашего шеф-повара(N.B. - просто из обрезков продуктов)", name: "От шефа", price: 999, picture: "https://www.purposegames.com/images/groups/4/4909.jpg" },
]

function getPizzas() {
    return Pizzas;
}

function getPizza(id){
    var pizza = Pizzas.find(x => x.id == id);
    return pizza;
}

module.exports = {getPizza, getPizzas}