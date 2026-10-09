// ==============================================
// ALTERAÇÃO 21/08 - LOGIN E CADASTRO SIMULADOS
// ==============================================


const botaoEntrar =
    document.getElementById("botaoEntrar");


const botaoCadastro =
    document.getElementById("botaoCadastro");


const formLogin =
    document.getElementById("formLogin");


const formCadastro =
    document.getElementById("formCadastro");



// ========================================
// ALTERAÇÃO 21/08 - MOSTRAR LOGIN
// ========================================

botaoEntrar.addEventListener(
    "click",
    function(){

        formLogin.style.display = "block";

        formCadastro.style.display = "none";


        botaoEntrar.classList.add(
            "opcaoAtiva"
        );


        botaoCadastro.classList.remove(
            "opcaoAtiva"
        );

    }
);



// ========================================
// ALTERAÇÃO 21/08 - MOSTRAR CADASTRO
// ========================================

botaoCadastro.addEventListener(
    "click",
    function(){

        formLogin.style.display = "none";

        formCadastro.style.display = "block";


        botaoCadastro.classList.add(
            "opcaoAtiva"
        );


        botaoEntrar.classList.remove(
            "opcaoAtiva"
        );

    }
);



// ========================================
// LOGIN SIMULADO
// ========================================

formLogin.addEventListener("submit", function(event){

    event.preventDefault();

    const email = formLogin.querySelector("input[type=email]").value;

    // Se a pessoa já se cadastrou, usa o nome salvo; senão usa o começo do email
    if(!localStorage.getItem("luciflixNome")){
        localStorage.setItem("luciflixNome", email.split("@")[0]);
    }

    window.location.href = "catalogo.html";

});


// ========================================
// CADASTRO SIMULADO (valida a confirmação de senha)
// ========================================

formCadastro.addEventListener("submit", function(event){

    event.preventDefault();

    const senhas = formCadastro.querySelectorAll("input[type=password]");

    if(senhas[0].value !== senhas[1].value){

        alert("As senhas não são iguais. Digite novamente.");

        senhas[1].focus();

        return;

    }

    const nome = formCadastro.querySelector("input[type=text]").value.trim();

    localStorage.setItem("luciflixNome", nome.split(" ")[0]);

    window.location.href = "catalogo.html";

});
