// // 1--------------anagrams-----
// let array = ['lleho', 'hello', 'asdasd', 'dasds'];

// function anagram(text, arr) {
//    let anagramArr=[];
//     arr.forEach(element => {
//         if (element.split('').sort().join('') === text.split('').sort().join('')) {
//             anagramArr.push(element)
//         }
//     });

//     return anagramArr;
// };

// console.log(anagram('hello', array));

// // 2------------strings----

// function stringCrop(textMinus, textLine) {
//    return textLine.split(textMinus).join('')
// };

// console.log( stringCrop('o', 'I was able to do it'));

// // -----------------------3 MISSING WORDS---

// function sentenceMissingWords(text, arr) {
//    let arrText = text.split(' ');
//    for (const [key, value] of Object.entries(arrText)) {
//       if (value === '_') {
//          arrText.splice(key, 1, `${arr[0]}`);
//          arr.shift();
//       }
//    }
//    return arrText.join(' ');

// }


// let arr = ['Houston','problem'];
// console.log(sentenceMissingWords('_ , we have a _ .', arr));

// // ------------------4 longest word--------------------

// function maxLength(text) {
//    let arrText = text.split(' ');
//    let max = 0;
//    let maxValue;
//    arrText.forEach(element => {
//       if (element.length >= max) {
//          max = element.length
//          maxValue = element;
//       }
//    });
//    return maxValue;
// }

// console.log(maxLength('hello hi bay asdfa asgdf asdfs 12345 asdasd_asdasd asdasd, sadasd.'));
