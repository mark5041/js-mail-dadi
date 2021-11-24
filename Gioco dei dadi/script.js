let start_game = document.querySelector(".btn");

start_game.addEventListener('click', 
    function()
    {
        let result;

        let num1 = Math.floor(Math.random() * 6) + 1;
        let num2 = Math.floor(Math.random() * 6) + 1;
        console.dir(num1);
        console.dir(num2);
        if(num1 > num2)
        {
            result = "il giocatore ha vinto";
        }
        else    if(num2 > num1)
                {
                    result = "il giocatore ha perso";
                }
                else
                {
                    result = "pareggio";
                }

        let player = document.querySelector(".player-box");
        let cpu = document.querySelector(".cpu-box");

        player.placeholder = num1;
        cpu.placeholder = num2;
    }
);