// Creare un ciclo che inserisca 100 celle nel container
// Numerare progressivamente le celle da 1 a 100
// Aggiungere alla cella la possibilità di colorarsi con un click

const boardContainer = document.querySelector(`.container`);

for( i = 1; i <= 100; i++){
    const boardCell = document.createElement(`div`)
    boardCell.classList.add(`.cell`);
    boardCell.innerHTML = i;
    boardContainer.append(boardCell);
}