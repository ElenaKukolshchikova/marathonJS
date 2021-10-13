const player1 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    }
}
const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['katana'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    }
}

function createPlayer(playerClass, playerName, playerHp, playerImg) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);
    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);
    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $character.appendChild($img)
    
    $life.style.width = playerHp + '%';
    $name.innerText = playerName;
    $img.src = playerImg;
    
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);

};

createPlayer('player1', 'Sonya', 80, player1.img);
createPlayer('player2', 'Kitana', 100, player2.img);