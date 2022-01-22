// // 1--------------anagrams-----
let array = ['lleho', 'hello', 'asdasd', 'dasds'];

function anagram(text, arr) {
   let anagramArr = [];
   arr.forEach(element => {
      if (element.split('').sort().join('') === text.split('').sort().join('')) {
         anagramArr.push(element)
      }
   });

   return anagramArr;
};

console.log(anagram('hello', array));

// // 2------------strings----

function stringCrop(textMinus, textLine) {
   return textLine.split(textMinus).join('')
};

console.log(stringCrop('o', 'I was able to do it'));

// // -----------------------3 MISSING WORDS---

function sentenceMissingWords(text, arr) {
   let arrText = text.split(' ');
   for (const [key, value] of Object.entries(arrText)) {
      if (value === '_') {
         arrText.splice(key, 1, `${arr[0]}`);
         arr.shift();
      }
   }
   return arrText.join(' ');

}


let arr = ['Houston', 'problem'];
console.log(sentenceMissingWords('_ , we have a _ .', arr));

// // ------------------4 longest word--------------------

function maxLength(text) {
   let arrText = text.split(' ');
   let max = 0;
   let maxValue;
   arrText.forEach(element => {
      if (element.length >= max) {
         max = element.length
         maxValue = element;
      }
   });
   return maxValue;
}

console.log(maxLength('hello hi bay asdfa asgdf asdfs 12345 asdasd_asdasd asdasd, sadasd.'));
// ------------------5-----------------------------
let inputName = {};
let candidatName = document.getElementById('candidat-name');
let form = document.getElementById('form');
let voteButton = document.getElementById('vote');
let tbody = document.getElementById('tbody');

let myArray = ['Yerevan', 'London', 'Moscow', 'Paris'];


function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
};

function getRandomTown() {
   return myArray[(Math.random() * myArray.length) | 0];
};

function addRow(name, age, country, votes = 1) {
   return `<tr class='row' data-element='${name}'">  
              <th class='name'>${name}</th>
              <th>${age}</th>
              <th>${country}</th>
             <th class='votes'>${votes}</th> 
         </tr>`;
};

let hist = [];
let allHist = [];



function sort() {
   let sortedRows = Array.from(table.rows)
      .slice(1)
      .sort((rowA, rowB) => parseInt(rowA.cells[3].innerHTML, 10) < parseInt(rowB.cells[3].innerHTML, 10) ? 1 : -1);

   table.tBodies[0].append(...sortedRows);
};


form.addEventListener('submit', e => {
   e.preventDefault();
   if (hist.includes(candidatName.value)) {
      for (let i = 0; i < hist.length; i++) {
         if (hist[i] == candidatName.value) {
            allHist[i].votsReturn();
            document.querySelector(`[data-element=${candidatName.value}]`).remove();
            tbody.insertAdjacentHTML('beforeend', `${addRow(candidatName.value, allHist[i].age, allHist[i].country, allHist[i].votes)}`);
            sort();
            //console.log(addRow(candidatName.value, allHist[i].age, allHist[i].country, allHist[i].votes));
         }
      };
   } else {
      hist.push(candidatName.value);
      let age = getRandomInt(18, 45);
      let country = getRandomTown();
      allHist.push({
         name: `${candidatName.value}`, votes: 1, age: `${age}`, country: `${country}`,
         votsReturn: function () {
            this.votes += 1;
         }
      })
      tbody.insertAdjacentHTML('beforeend', `${addRow(candidatName.value, age, country)}`);
      sort();

      console.log(addRow(candidatName.value, age, country));
   }

});