// filmes.js - catálogo do Luci flix
// Para trocar a capa: coloque a imagem na pasta Imagens/ e altere o campo "imagem".

const filmes = [
    {
        id: "interestelar",
        titulo: "Interestelar",
        imagem: CAPAS["interestelar"],
        descricao: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "i6avfCqKcQo",
        duracao: "2h 49 min",
        genero: "Ficção científica",
        classificacao: "+10",
    },

    {
        id: "batman-cavaleiro-das-trevas",
        titulo: "Batman: O Cavaleiro das Trevas",
        imagem: CAPAS["batman-cavaleiro-das-trevas"],
        descricao: "A paz de Gotham é ameaçada pelo Coringa, um anarquista que mergulha a cidade no caos e testa os limites do Batman.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "2h 32 min",
        genero: "Ação / Suspense",
        classificacao: "+14",
    },

    {
        id: "ong-bak",
        titulo: "Ong-Bak: Guerreiro Sagrado",
        imagem: CAPAS["ong-bak"],
        descricao: "Ting, um jovem guerreiro de uma pacata vila tailandesa, vai a Bangkok recuperar a cabeça roubada da estátua sagrada de sua aldeia.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "1h 45 min",
        genero: "Ação / Artes marciais",
        classificacao: "+14",
    },

    {
        id: "kung-fusao",
        titulo: "Kung-Fusão",
        imagem: CAPAS["kung-fusao"],
        descricao: "Sing, um malandro trapalhão, tenta entrar para a temida Gangue do Machado e acaba descobrindo um talento inesperado.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "1h 39 min",
        genero: "Ação / Comédia",
        classificacao: "+14",
    },

    {
        id: "homem-aranha",
        titulo: "Homem-Aranha",
        imagem: CAPAS["homem-aranha"],
        descricao: "Depois de ser picado por uma aranha, o jovem Peter Parker ganha força, agilidade e a capacidade de escalar paredes.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "2h 01 min",
        genero: "Ação / Aventura",
        classificacao: "+12",
    },

    {
        id: "capitao-america-guerra-civil",
        titulo: "Capitão América: Guerra Civil",
        imagem: CAPAS["capitao-america-guerra-civil"],
        descricao: "Após danos colaterais em missões, a ONU propõe um tratado para controlar os Vingadores e a equipe se divide em dois lados.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "2h 27 min",
        genero: "Ação / Ficção científica",
        classificacao: "+12",
    }
];

const series = [
    {
        id: "stranger-things",
        titulo: "Stranger Things",
        imagem: CAPAS["stranger-things"],
        descricao: "Um grupo de crianças enfrenta forças sobrenaturais e experimentos secretos em uma pequena cidade dos anos 80.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "5 temporadas",
        genero: "Ficção científica / Terror",
        classificacao: "+14",
    },

    {
        id: "dark",
        titulo: "Dark",
        imagem: CAPAS["dark"],
        descricao: "Quando crianças desaparecem em uma cidade alemã, segredos de quatro famílias revelam viagens no tempo e multiversos.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "3 temporadas",
        genero: "Ficção científica / Suspense",
        classificacao: "+16",
    },

    {
        id: "breaking-bad",
        titulo: "Breaking Bad",
        imagem: CAPAS["breaking-bad"],
        descricao: "Walter White, um professor de química, se transforma aos poucos em um dos maiores chefões do tráfico.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "5 temporadas",
        genero: "Drama / Crime",
        classificacao: "+16",
    },

    {
        id: "peaky-blinders",
        titulo: "Peaky Blinders",
        imagem: CAPAS["peaky-blinders"],
        descricao: "Thomas Shelby e sua gangue ganham poder nas ruas de Birmingham depois da Primeira Guerra Mundial.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "6 temporadas",
        genero: "Drama / Crime",
        classificacao: "+16",
    },

    {
        id: "round-6",
        titulo: "Round 6",
        imagem: CAPAS["round-6"],
        descricao: "Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência com prêmio milionário.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "3 temporadas",
        genero: "Suspense / Drama",
        classificacao: "+18",
    },

    {
        id: "avatar-aang",
        titulo: "Avatar: A Lenda de Aang",
        imagem: CAPAS["avatar-aang"],
        descricao: "Aang, um menino de 12 anos, acorda após cem anos congelado num iceberg e precisa dominar os quatro elementos para salvar o mundo.",
        // Cole aqui só o ID do vídeo do YouTube (ex.: i6avfCqKcQo). Vazio = botão de busca do trailer.
        trailer: "",
        duracao: "3 temporadas",
        genero: "Animação / Aventura",
        classificacao: "Livre",
    }
];
