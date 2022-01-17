class Rectangle {
    constructor (width = 0, height = 0)
    {
        this.width = width
        this.height = height
    }

    area() {
        return this.height * this.width;
    }
}

// Пример использования:
const rect1 = new Rectangle(5, 6);
console.log(rect1.area()) // должен вернуть 30
