let start_game = document.querySelector(".btn");
let player = document.querySelector(".score-player");
let cpu = document.querySelector(".score-cpu");
let point = [0,0];

start_game.addEventListener('click', 
    function()
    {
        // let result;

        // let num1 = Math.floor(Math.random() * 6) + 1;
        // let num2 = Math.floor(Math.random() * 6) + 1;
        // console.dir(num1);
        // console.dir(num2);
        // if(num1 > num2)
        // {
        //     result = "il giocatore ha vinto";
        // }
        // else    if(num2 > num1)
        //         {
        //             result = "il giocatore ha perso";
        //         }
        //         else
        //         {
        //             result = "pareggio";
        //         }

        // let player = document.querySelector(".player-box");
        // let cpu = document.querySelector(".cpu-box");
        // let esito = document.querySelector(".my-box");

        // player.placeholder = num1;
        // cpu.placeholder = num2;
        // esito.innerHTML = `<span> ${result} </span>`;

        
        let num = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        let score;
        let result;

        console.log(num[0]);
        console.log(num[1]);

        for(let i = 0; i < num.length; i++)
        {
            console.log(i);
            switch(true)
            {
                case num[i] == 1:
                    score =`<i class="fa-solid fa-circle mid"></i>`;
                break;
                case num[i] == 2:
                    score =`<i class="fa-solid fa-circle two"></i>
                            <i class="fa-solid fa-circle five"></i>`;
                break;
                case num[i] == 3:
                    score =`<i class="fa-solid fa-circle two"></i>
                            <i class="fa-solid fa-circle five"></i>
                            <i class="fa-solid fa-circle mid"></i>`;
                break;
                case num[i] == 4:
                    score =`<i class="fa-solid fa-circle one"></i>
                            <i class="fa-solid fa-circle two"></i>
                            <i class="fa-solid fa-circle five"></i>
                            <i class="fa-solid fa-circle six"></i>`;
                break;
                case num[i] == 5:
                    score =`<i class="fa-solid fa-circle one"></i>
                            <i class="fa-solid fa-circle two"></i>
                            <i class="fa-solid fa-circle five"></i>
                            <i class="fa-solid fa-circle six"></i>
                            <i class="fa-solid fa-circle mid"></i>`;
                break;
                case num[i] == 6:
                    score =`<i class="fa-solid fa-circle one"></i>
                            <i class="fa-solid fa-circle two"></i>
                            <i class="fa-solid fa-circle three"></i>
                            <i class="fa-solid fa-circle four"></i>
                            <i class="fa-solid fa-circle five"></i>
                            <i class="fa-solid fa-circle six"></i>`;
                break;
            }

            result = document.querySelector(`.box:nth-child(${i+1}) .dado`);
            result.innerHTML = score;
            
        }

        if(num[0] > num[1])
        {
             point[0] ++;
        }

        if(num[0] < num[1])
        {
            point[1] ++;
        }
                
        player.innerHTML = `<span>Score: ${point[0]}`;
        cpu.innerHTML = `<span>Score: ${point[1]}`;
        
    }
);