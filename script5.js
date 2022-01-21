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
}

function getRandomTown() {
   return myArray[(Math.random() * myArray.length) | 0];
}


function addRow(value) {
   table.insertAdjacentHTML('beforeend',
      `<tr class='row'">  
            <th class='name'>${value}</th>
            <th>${getRandomTown(20, 75)}</th>
            <th>${getRandomTown()}</th>
            <th class='votes'>1</th> 
         </tr>`);
};

candidatName.addEventListener('input', e => {
   inputValue = e.target.value;
})

let obj ={};
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
            addInfo = 1;
         }
      }
      if (addInfo == 0) {
         inputValueHist.push(inputValue);
         addRow(inputValue);
      }
   }

   Array.prototype.forEach.call(document.getElementsByClassName('votes'), e => {
      console.log(e.toString);
      Object.assign(obj, {[e.textContent]: `${e}`});
      
   });
   console.log(obj);
   // allVote.shift();
   // console.log(allVote);
   // for (let i = 0; i < .length)

});

