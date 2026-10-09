const parametros = new URLSearchParams(window.location.search);
const tipo = parametros.get("tipo");
const id = parametros.get("id");

const lista = tipo === "serie" ? series : filmes;
const item = lista.find(conteudo => conteudo.id === id);

const titulo = document.getElementById("tituloPlayer");
const descricao = document.getElementById("descricaoPlayer");
const video = document.getElementById("playerYoutube");
const container = document.querySelector(".videoContainer");

if (item) {
    document.title = item.titulo + " - Luci flix";
    titulo.textContent = item.titulo;
    descricao.textContent =
        item.descricao + "\n" + item.duracao + " • " + item.genero + " • " + item.classificacao;
    descricao.style.whiteSpace = "pre-line";

    // ID do vídeo sem parâmetros extras (ex.: "i6avfCqKcQo?si=..." vira "i6avfCqKcQo")
    const videoId = (item.trailer || "").split("?")[0].trim();

    if (videoId && videoId !== "ID_YOUTUBE") {
        video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } else {
        // Sem trailer cadastrado: mostra botão para buscar no YouTube
        const busca = "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(item.titulo + " trailer oficial");
        container.innerHTML =
            `<div class="semTrailer">
                <img src="${item.imagem}" alt="${item.titulo}">
                <p>Trailer ainda não cadastrado.</p>
                <a href="${busca}" target="_blank" rel="noopener" class="btnPlay">▶ Buscar trailer no YouTube</a>
            </div>`;
    }
} else {
    titulo.textContent = "Conteúdo não encontrado";
    descricao.textContent = "Não foi possível localizar esse filme ou série.";
    container.style.display = "none";
}
