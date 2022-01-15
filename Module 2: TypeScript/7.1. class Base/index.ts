/*
    Напишите class Base.
    Используйте болки "Код без ошибок" и "Код с ошибками" для проверки типизации.
    После выполнения кода в консоли должно быть число 40.
*/

/*
    Поскольку дальше по коду идет прямое обращение к x, то сделаем его
    protected и добавим геттеры/сеттеры.

    Так как мы хотим запертить прямое обращение к y, но оставить его доступным
    внутри классов наследников, то сделаем его protected, но не будет объявлять геттеры/сеттеры к нему.
*/
abstract class Base {
    protected _x: number
    protected y: string

    get x(): number {
        return this._x
    }

    constructor(x: number, y: string)
    {
        this._x = x;
        this.y = y;
    }

    public abstract calc(value: number): number;
}

/* код без ошибок */
class A extends Base {
    constructor(x: number) {
        super(x, "A");
    }

    public calc(y: number): number {
        return this.x + y;
    }
}

class B extends Base {
    constructor(y: string) {
        super(10, y);
    }

    public calc(y: number) {
        return parseInt(this.y) + y;
    }
}

const calculators: Base[] = [new A(10), new B("10")];
const sum = calculators.map(x => x.calc(x.x)).reduce((a, c) => a + c);
console.log(sum);
/* --- */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html
*/

/* Код с ошибками */
// @ts-expect-error
calculators[0].y;
// @ts-expect-error
new Base(10, "10");
/* --- */
