alert("Só lembrando: te amo muito e quero voce pra sempre minha linda, jaja a gente conquista o que quisermos");


const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./projeto-listagem-pokemon/src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./projeto-listagem-pokemon/src/imagens/moon.png");
    }});



