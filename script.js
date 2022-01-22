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




