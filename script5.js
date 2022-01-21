// -----------------5---------------

let table = document.getElementById('table');
let vote = document.getElementById('vote');
let form = document.getElementById('form');
let candidatName = document.getElementById('candidat-name');
let inputValue = '';
let inputValueHist = [];
let myArray = ['Yerevan', 'London', 'Moscow', 'Paris'];


function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
};

function getRandomTown() {
   return myArray[(Math.random() * myArray.length) | 0];
};

function addRow(value) {
   table.insertAdjacentHTML('beforeend',
      `<tr class='row'">  
            <th class='name'>${value}</th>
            <th>${getRandomInt(20, 75)}</th>
            <th>${getRandomTown()}</th>
            <th class='votes'>1</th> 
         </tr>`);
};

candidatName.addEventListener('input', e => {
   inputValue = e.target.value;
});


let obj = {};
form.addEventListener('submit', e => {
   e.preventDefault();
   let addInfo = 0;
   let allVote = [];
   let test = {};
   if (inputValue != '') {
      for (let i = 0; i < inputValueHist.length; i++) {
         if (inputValueHist[i] === inputValue) {
            document.getElementsByClassName('votes')[i + 1].innerText =
               +document.getElementsByClassName('votes')[i + 1].textContent + 1;
               // table.insertAdjacentHTML('afterbegin',``));
               document.getElementsByClassName('votes')[i + 1].parentNode.remove();
               // console.log(typeof inf);
            addInfo = 1;
         }
      }
      if (addInfo == 0) {
         inputValueHist.push(inputValue);
         addRow(inputValue);
      }
   }
});

// form.addEventListener('change', e => {
//    let a = [];
//    Array.prototype.forEach.call(document.getElementsByClassName('votes'), e => {
//       for (i = 0; i < document.getElementsByClassName('votes').length; i++) {
//          a.push(document.getElementsByClassName('votes')[i]);
//       };
//    });
//    console.log(a);
// // })

// let array = [];
// form.addEventListener('change', e => {
//    let rows =document.getElementsByClassName('row');
//    console.log(rows[0].lastChild);
//    // let elems = document.getElementsByClassName("votes");
  
//    // for (let i = elems.length >>> 0; i--;) {
//    //    array[i] = elems[i];
//    // }

//    // array.sort(function (a, b) {
//    //    return Number(b.innerHTML) - Number(a.innerHTML);
//    // });
//    // console.log(array);
  
// })
