        const mario = document.querySelector('.mario')
        const pipe = document.querySelector('.pipe')
        const audio = document.querySelector('audio')
        const cloud = document.querySelector('.cloud')
        const cloud2 = document.querySelector('.cloud2')
        const board = document.querySelector('.game-board')
        const end = document.querySelector('.end')
        const points = document.querySelector('.final-points')
        const key = document.querySelector('.key')
        
        // pop up de controles
        function showPopup() {
            // Mostra o pop-up
            document.querySelector('.popup').style.display = 'block';
          }
    
          function hidePopup() {
            // Esconde o pop-up
            document.querySelector('.popup').style.display = 'none';
          }
        

        //contador
        count = 0;
        const intervalId = setInterval(() => {
            count++;
            console.log(count);
            document.getElementById("counter").innerHTML = count;
          }, 1000);

        // loop do jogo
        const loop = setInterval(()=>{
            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if(pipePosition <= 200 && pipePosition > 0 && marioPosition <80){
                pipe.style.animation = 'none';
                pipe.style.left = `${230}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${100}px`;
                
                cloud.style.animation = 'none';
                cloud2.style.animation = 'none';

                board.style.background = 'black';

                cloud.style.display = 'none';
                cloud2.style.display = 'none';
                points.style.display = 'inline-flex'
                key.style.display = 'inline-flex'

                end.style.display = 'block';

                mario.src = 'img/death.png';
                mario.style.width = '150px';
                mario.style.marginLeft = '50px';

                audio.src= './audios/mario-som.mp3';
                audio.play();
                document.getElementById("final").innerHTML = count;
                clearInterval(loop);
                clearInterval(intervalId);
            }
        },10);

        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {              
                location.reload();
            }
            if (e.key === ' ' || e.key === 'Space') {              
            audio.src= 'audios/mario-jump.mp3';
            audio.play();
            mario.classList.add('jump');
            setTimeout(() => {
            mario.classList.remove('jump'); 
            }, 500);
            }
        })
