const shart =  [ 'sang','kaghaz','gheychi'];
const player1 = prompt('choose sang kaghaz gheychi')
let rand = parseInt(Math.random()*(2-0+1)+0);
const player2 = shart[rand];

console.log(`player 1 choose : ${player1}`)
console.log(`player 2 choose : ${player2}`)

if(player1 == player2){
    console.log('no way! equal');
}
else if(player1 == 'kaghaz' && player2 == 'gheychi')
{
    console.log('player1 win!');
}
else if(player1 == 'kaghaz' && player2 == 'sang')
{
    console.log('player1 win!');
}
else if(player1 == 'sang' && player2 == 'gheychi')
{
    console.log('player1 win!');
}
else if(player1 == 'sang' && player2 == 'kaghaz')
{
    console.log('player2 win!');
}
else if(player1 == 'gheychi' && player2 == 'sang')
{
    console.log('player2 win!');
}
else if(player1 == 'gheychi' && player2 == 'kaghaz')
{
    console.log('player1 win!');
}