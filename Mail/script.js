let button_submission = document.querySelector(".btn");

button_submission.addEventListener('click', 
    function()
    {
        let mail_list = ["gianfranco@gmail.com","arthur@gmail.com","bigmac@gmail.com","alfonsoilcalvo@gmail.com"];
        let mail = document.querySelector(".my-input");
        let esito = document.querySelector(".my-box");

        if(!(mail_list.includes(mail.value)))
        {
            mail.placeholder = "utente non riconosciuto";
            mail.classList.add("red");
        }
        else    
        {
            esito.innerHTML = `<span> utente valido </span>`;
        }

        
    }
);