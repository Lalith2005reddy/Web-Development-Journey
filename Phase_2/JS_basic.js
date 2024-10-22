let score = JSON.parse(localStorage.getItem('score')) || {
    Win: 0,
    Lose: 0,
    Tie: 0
};

function result_display(res){
document.querySelector('.js-result')
    .innerHTML = `You ${res}`;
}
function movesfun(your,comp){
document.querySelector('.js-moves')
    .innerHTML = `Your: 
    <img src="images/${your}-emoji.png" class="img-shape"> 
    and Comp: 
    <img src="images/${comp}-emoji.png" class="img-shape">`;
}
function scoredisplay(){
document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Win}, Loses: ${score.Lose}, Ties: ${score.Tie}`;
}
scoredisplay();
/*
if(score===null){
score = {
    Win: 0,
    Lose: 0,
    Tie: 0.
}
}
*/
//AutoPLay Function
let isautoplaying = false;
let intervalid;
function autoplay(){
    if(!isautoplaying){
        intervalid = setInterval(function(){
            playgame(compfun())
        },1000);
        isautoplaying = true;
    }
    else{
        clearInterval(intervalid);
        isautoplaying = false;
    }
}
function compfun(){
const rand = Math.random();
let compmove = '';
    if(rand >=0 && rand < 1/3){
        compmove = 'Rock';
    }
    else if(rand > 1/3 && rand < 2/3){
        compmove = 'Paper';
    }
    else if(rand > 2/3 && rand < 1){
        compmove = 'Scissors';
    }
    return compmove;
}
function playgame(usermove){
let compmove = compfun();
let result = '';
if(usermove === 'Rock'){
    
    if(compmove === 'Rock'){
        result = 'Tie';
    }
    else if(compmove === 'Paper'){
        result = 'Lose';
    }
    else if(compmove === 'Scissors'){
        result = 'Win';
    }
    
}

else if(usermove === 'Paper'){
    if(compmove === 'Rock'){
        result = 'Win';
    }
    else if(compmove === 'Paper'){
        result = 'Tie';
    }
    else if(compmove === 'Scissors'){
        result = 'Lose';
    }
}

else if(usermove === 'Scissors'){
    if(compmove === 'Rock'){
        result = 'Lose';
    }
    else if(compmove === 'Paper'){
        result = 'Win';
    }
    else if(compmove === 'Scissors'){
        result = 'Tie';
    }
}
if(result === 'Win'){
    score.Win++;
}
else if(result === 'Lose'){
    score.Lose++;
}
else if(result === 'Tie'){
    score.Tie++;
}
result_display(result);
scoredisplay();
movesfun(usermove,compmove);
localStorage.setItem('score',JSON.stringify(score));

/*alert(`Your Move is ${usermove}. Computer Move is ${compmove} .Result is ${result}
Wins: ${score.Win}, Loses: ${score.Lose}, Ties: ${score.Tie}`);*/
}