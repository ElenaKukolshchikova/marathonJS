const player1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    }
}
const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['katana'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    }
}
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }

    return $tag;
};

function createPlayer(playerObj) {
    const $player1 = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    $player1.appendChild($progressbar);
    const $character = createElement('div', 'character');
    $player1.appendChild($character);

    const $life = createElement('div', 'life');
    $progressbar.appendChild($life);
    const $name = createElement('div', 'name');
    $progressbar.appendChild($name);

    const $img = createElement('img');
    $character.appendChild($img)
    
    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    return $player1;

};



function changeHp(player){
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';
    
    if(player.hp <= 0){
        player.hp = 0;
        $playerLife.style.width = '0%';
        $arenas.appendChild(whoWin(player));
        $randomButton.disabled = true;
    }

}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' win';

    return $loseTitle;
}
function nobodyWon() {
    const $nobodyTitle = createElement('div', 'nobodyTitle');
    $nobodyTitle.innerText ='Draw';

    return $nobodyTitle;
}

function whoWin() {
    if(player1.hp !== 0 && player2.hp !== 0){
        return nobodyWon();
    }else if(player1.hp > player2.hp){
       return playerWin(player1.name);
    } else {
       return playerWin(player2.name);
    }
}

console.log(nobodyWon());


$randomButton.addEventListener('click', function() {

    changeHp(player1);
    changeHp(player2);

});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
