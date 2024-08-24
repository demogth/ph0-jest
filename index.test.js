const positiveSum = require('./01-SumOfPositive')
const partlist = require('./02-PartsOfAList')

describe('Тест функции SumOfPositive', () => {
    test('Возвращает ли функция число?', () => {
        const array = [1, 2];
        expect(Number.isInteger(positiveSum(array))).toBeTruthy();
    })
    test('Возвращает ли функция положительное число?', () => {
        const array = [-5, 1, 0, 1]
        expect(positiveSum(array) > 0).toBeTruthy();
    })
    test('Возвращает ли 0 при пустом массиве', () => {
        const array = []
        expect(positiveSum(array)).toBe(0);
    })
    test('Должно быть равно', () => {
        const array = [-100, -2, -3]
        expect(positiveSum(array)).toBe(0);
    })
    test('Должно быть равно', () => {
        const array = [100, -2, -3]
        expect(positiveSum(array)).toBe(100);
    })
})

describe('Тест функции PartsOfAList', () => {
    const array = ['hello', ',', 'world']

    test('Возвращается ли массив', () => {
        expect(partlist(array) instanceof Array).toBe(true)
    })
    test('Есть ли в произвоольном массиве пустая строка', () => {
        expect(partlist(array)[1]).not.toContainEqual([''])
    })
    test('Все ли варианты создаются?', () => {
        expect(partlist(array)).toHaveLength(array.length - 1)
    })
    test('Состоит ли новый массив из двух элементов', () => {
        expect(partlist(["az", "toto", "picaro", "zone", "kiwi"])).toEqual(
            [
                [ 'az', 'toto picaro zone kiwi' ],
                [ 'az toto', 'picaro zone kiwi' ],
                [ 'az toto picaro', 'zone kiwi' ],
                [ 'az toto picaro zone', 'kiwi' ],
            ]
        )
    })


}) 



console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))

// длина всегда 2
// отсутствует пустая строка
// возвращается массив
// массив состоит из двух строк
// количество символов одинаков в ориджинал массиве и в return

