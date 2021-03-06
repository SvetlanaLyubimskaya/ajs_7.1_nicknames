export default class Validator {
//   constructor(name) {
//     this.name = name;
//   }

  validateUsername(name) {
    // Допустимы только латинские буквы,
    // символы тире -, подчёркивания _ и цифры (0-9);
    const name1 = /^[-\w]+$/.test(name);

    // Имя не должно содержать подряд более трёх цифр
    const name2 = !/\d{4,}/.test(name);

    // Имя не должно начинаться и заканчиваться цифрами,
    // символами подчёркивания или тире
    const name3 = !/^[\d_-]|[\d_-]$/.test(name);

    const result = name1 && name2 && name3;

    return result;
  }
}

/*
^ сигнализирует о начале строки
$ сигнализирует о конце строки
i - игнорирование регистра
g - возвращает массив всех совпадений
. - любой символ
\s - любой пробельный символ
\S - любой непробельный символ
\d - любая цифра
\D - любая нецифра
\w - любой буквенный символ
\W - любой небуквенный символ
a? - символ a должен встречаться 0 или 1 раз
a* - символ a должен встречаться 0 или более раз подряд
a+ - символ a должен встречаться 1 или более раз подряд
a{5} - символ a должен встречаться ровно 5 раз подряд
a{3,5} - символ a должен встречаться ровно от 3 до 5 раз подряд
Эти квантификаторы можно применять не только к единичным символам,
например: [a-z]*
[abc] - подразумевает любой из символов группы
[^abc] - подразумевает любой не из символов группы
[a-z] - подразумевает любой из символов от a до z
*/
