import Game from './GameObjects/game';
import { fadeIn, elementFadeIn, wavyGradient } from './GameLogic/opacity'

document.addEventListener('DOMContentLoaded', (e) => {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var buttonActive = false;
    var instructOne = document.getElementById("instruct1");
    var instructTwo = document.getElementById("instruct2");
    var instructThree = document.getElementById("instruct3");
    var instructFour = document.getElementById("instruct4");
    var footer = document.getElementById("footer");
    let game = new Game(canvas, ctx);
    let frame = 0;
    // faded
    const startGame = function() {
        playButton.removeEventListener('click', startGame);
        document.removeEventListener('keydown', spacePress);
        playButton.remove();
        game.menu = 0
    }

    const spacePress = function(e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
            playButton.click();
        }
    };
    const playButton = document.createElement("BUTTON")
    playButton.innerText = "P L A Y"
    playButton.id = 'playButton'
    playButton.addEventListener("click", startGame )
   
    const playGame = setInterval( () => {
        let border = frame;
        while(border > 360){
            border -= 360;
        }
        canvas.style.border=`3px solid hsl(${border},45%,76%)`;
        canvas.style.opacity = elementFadeIn(frame);
        footer.style.opacity = elementFadeIn(frame);
        footer.style.color = `hsl(${ border }, 45%, 76%)`;

        
        instructOne.style.color = `${fadeIn(255, 255, 255, frame - 80)}`
        instructTwo.style.color = `${fadeIn(255, 255, 255, frame - 110)}`
        instructThree.style.color = `${fadeIn(255, 255, 255, frame - 140)}`
        instructFour.style.color = `${fadeIn(255, 255, 255, frame - 170)}`
        
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw()

        if (game.menu === 1){
            
            if (!buttonActive){
                buttonActive = true;
                document.body.appendChild(playButton)
                document.addEventListener('keydown', spacePress);
        
            }

        } else if (game.started === false && game.menu === 0){
            game.started = true;
            
            
            let music = document.createElement("audio");
            music.src ='Previous-Poaceae.m4a';
            music.setAttribute("preload", "auto");
            music.id = "music"
            music.setAttribute("controls", "none");
            music.setAttribute("autoplay", "true");
            music.loop = true;
            music.style.display = "none";
            document.body.appendChild(music);

            setTimeout( ()=>{
                game.endTutorial();
            }, 5000)

        } else {
            canvas.style.background = wavyGradient(frame)
        }


        ++frame;
    },15)

})


