/*
    Напишите класс X и тип XType
    Используйте болки "Код без ошибок" и "Код с ошибками" для проверки типизации
    После выполнения кода в консоли должно быть число "20 15"
*/

/* Код без ошибок */
class X {
    public x: number;

    constructor(x: number)
    {
        this.x = x;
    }

    public print(str: string): void {
        console.log(`${str}  ${this.x}`);
    }
}



type XType = {
    new (x: number): X,
}

interface A {
    x: number;
}

interface B {
    print: (y: string) => void;
}

function create(x: number, type: XType): A & B {
    return new type(x);
}

create(15, X).print("20")
/* --- */

class Other {
    constructor(public x: number, public y: number) {
    }
}

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* Код с ошибками */
// @ts-expect-error
create(15, Other)
/* --- */
