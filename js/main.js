// Creare un ciclo che inserisca 100 celle nel container
// Numerare progressivamente le celle da 1 a 100
// Aggiungere alla cella la possibilità di colorarsi con un click

const boardContainer = document.querySelector(`.container`);

const gameLevel = document.getElementById(`level`);


const playStart = document.getElementById(`play_start`);
playStart.addEventListener(`click`, function(){

    // Definire variabili per creazione celle
    let easyGameCell = 100;
    let mediumGameCell = 81;
    let hardgameCell = 49;

    if (gameLevel.value === `facile`){
        console.log(`facile`);
    } else if (gameLevel.value === `medio`){
        console.log(`medio`);
    } else{
        console.log(`difficile`);
    }

    for( i = 1; i <= easyGameCell; i++){
        const boardCell = document.createElement(`div`);
        boardCell.classList.add(`cell`);
        boardCell.innerHTML = i;
        boardContainer.append(boardCell);
        boardCell.addEventListener(`click`, function(){
            console.log(this.innerHTML);
            this.classList.add(`clicked`);
        })
    }
})



