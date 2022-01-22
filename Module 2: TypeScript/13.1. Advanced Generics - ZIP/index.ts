/*
    Использя generic-параметры, типизируйте функцию zip, чтобы не было ошибок компиляции.
    Возможно, потребуется дописать типы в теле функции.
*/

function zip<T, R>(first: T[], second: R[]): Array<[T, R]> {
  const minLength = Math.min(first.length, second.length);
  const result: Array<[T, R]> = [];
  for (let i = 0; i < minLength; i++) {
    result.push([first[i], second[i]])
  }
  return result
}

const q1: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
const q2: Array<[boolean, boolean]> = zip([true], [false, false]);
console.log(q1, q2);
