score = 0;
cross = true;
cross1 = true;

audio = new Audio('./assets/music.mp3');
audiogo = new Audio('./assets/gameover.mp3');
// audio.play()
setInterval(()=>audio.play(),10);

document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 125 + "px";

    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 125 )+ "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    // audio.play()
    if( offsetX < 93 && offsetY < 52){
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            //audio.pause();
        }, 1000);
        cross = false
        
    }
    else if( cross){
        score += 1;
        updateScore(score)
        //  for audio playing --> it will stop after collision
        // setTimeout(() => {
        //     audio.play()
        // }, 1000);
        
    }

    if(offsetX <145 && cross1){
        cross1 = false;
        setTimeout(() => {
            cross1 = true;
        }, 900);
        setTimeout(() => {
                    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                    newDur = aniDur - 0.1;
                    obstacle.style.animationDuration = newDur + 's';
                    console.log('New animation duration: ', newDur)
                }, 500);
    }
},10);

// else if ( offsetX < 145 && cross) {
//     score += 1;
//     updateScore(score);
//     cross = false;
//     setTimeout(() => {
//         cross = true;
//     }, 900);
//     setTimeout(() => {
//         aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
//         newDur = aniDur - 0.1;
//         obstacle.style.animationDuration = newDur + 's';
//         console.log('New animation duration: ', newDur)
//     }, 500);

// }

// }, 10);
function updateScore(score){
    scoreCont.innerHTML = "your score: "+ score 
}