let button_submission = document.querySelector(".btn");

button_submission.addEventListener('click', 
    function()
    {
        let mail_list = ["gianfranco@gmail.com","arthur@gmail.com","bigmac@gmail.com","alfonsoilcalvo@gmail.com"];
        let mail = document.querySelector(".my-input");
        let esito = document.querySelector(".my-box");
        let unvalid = true;

        // if(!(mail_list.includes(mail.value)))
        // {
        //     mail.placeholder = "utente non riconosciuto";
        //     mail.classList.add("red");
        // }
        // else    
        // {
        //     esito.innerHTML = `<span> utente valido </span>`;
        // }

        for(let i = 0; i < mail_list.length + 1; i++)
        {
            if(mail_list[i] == mail.value)
            {
                unvalid = false;
            }
        }

        if(unvalid == true)
        {
            mail.placeholder = "utente non riconosciuto";
            mail.classList.add("red");
            console.log("bella");
        }
        else 
        {
            esito.innerHTML = `<span> utente valido </span>`;
            console.log("ciao");
        }
        
    }
);