// Recebe uma array com os elementos HTML dos conteúdos. Exibe um deles (indice) e oculta os outros.
const mostrarConteudo = (elementosConteudo, indice) => {

    let tamanhoArray = elementosConteudo.length;

    for (let i = 0; i < tamanhoArray; i++){

        if (i == indice)
            elementosConteudo[indice].style.display = "block";
        else
            elementosConteudo[i].style.display = "none";

    }

}

// Cria os elemento HTML dos cards.
const card = (conteudo, elemento, linkImagem, opcao) => {

    if (opcao == "padrao") {

        let conteudoHTML;

        if(conteudo == "films") {

            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.title}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                <b>Título:</b> ${elemento.title}
                            </div>
                            <div class="info">
                                Produtor: ${elemento.producer}
                            </div>
                            <div class="info">
                                Diretor: ${elemento.director}
                            </div>
                            <div class="desc">
                                Descrição: ${elemento.opening_crawl}
                            </div>
                        </div>
                    </div>
                    `;

        }
        else if(conteudo == "people") {
            
            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.name}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                <b>Nome:</b> ${elemento.name}
                            </div>
                            <div class="info">
                                Altura: ${elemento.height}
                            </div>
                            <div class="info">
                                Cor dos olhos: ${elemento.eye_color}
                            </div>
                            <div class="info">
                                Cor da Pele: ${elemento.skin_color}
                            </div>
                            <div class="info">
                                Idade: ${elemento.birth_year}
                            </div>
                            <div class="info">
                                Sexo: ${elemento.gender}
                            </div>
                        </div>
                    </div>
                    `;

        }
        else if(conteudo == "planets") {

            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.name}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                Nome: ${elemento.name}
                            </div>
                            <div class="info">
                                Diâmetro: ${elemento.diameter}
                            </div>
                            <div class="info">
                                Clima: ${elemento.climate}
                            </div>
                            <div class="info">
                                População: ${elemento.population}
                            </div>
                            <div class="info">
                                Terreno: ${elemento.terrain}
                            </div>
                            <div class="info">
                                Gravidade: ${elemento.gravity}
                            </div>
                        </div>
                    </div>
                    `;
            
        }
        else if(conteudo == "species") {

            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.name}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                Nome: ${elemento.name}
                            </div>
                            <div class="info">
                                Classificação: ${elemento.classification}
                            </div>
                            <div class="info">
                                Tempo de vida médio: ${elemento.average_lifespan}
                            </div>
                            <div class="info">
                                Idioma: ${elemento.language}
                            </div>
                            <div class="info">
                                Descrição: ${elemento.designation}
                            </div>
                            <div class="info">
                                Cores de pele: ${elemento.skin_colors}
                            </div>
                        </div>
                    </div>
                    `;
            
        }
        else if(conteudo == "starships") {

            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.name}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                Nome: ${elemento.name}
                            </div>
                            <div class="info">
                                Model: ${elemento.model}
                            </div>
                            <div class="info">
                                Custo: ${elemento.cost_in_credits}
                            </div>
                            <div class="info">
                                Passageiros: ${elemento.passengers}
                            </div>
                            <div class="info">
                                Capacidade de carga: ${elemento.cargo_capacity}
                            </div>
                            <div class="info">
                                Equipe técnica: ${elemento.crew}
                            </div>
                        </div>
                    </div>
                    `;
            
        }
        else if(conteudo == "vehicles") {

            conteudoHTML = `<div class="card_info">
                        <div class="card_img">
                            <img src='${linkImagem}' class='card_img_item'>
                        </div>
                        <div class="card_titulo">
                            ${elemento.name}
                        </div>
                        <div class="card_descricao">
                            <div class="name_title">
                                Nome: ${elemento.name}
                            </div>
                            <div class="info">
                                Modelo: ${elemento.model}
                            </div>
                            <div class="info">
                                Fabricante: ${elemento.manufacturer}
                            </div>
                            <div class="info">
                                Custo: ${elemento.cost_in_credits}
                            </div>
                            <div class="info">
                                Passageiros: ${elemento.passengers}
                            </div>
                            <div class="info">
                                Consumíveis: ${elemento.consumables}
                            </div>
                        </div>
                    </div>
                    `;
            
        }

        const $conteudo = document.getElementById("cont_conteudo_" + conteudo);
        $conteudo.innerHTML += conteudoHTML;
        setCardEvent($conteudo.children);

    }


}

// Busca o conteúdo especificado na API.
const buscarInfoAPI = (pagina, conteudo) => {

    let url = `https://swapi.co/api/${conteudo}/?page=${pagina}`;

    fetch(url)
    .then( dados => dados.json() )
    .then( json => transformJson(json) );

    const transformJson = json => {

        let arrayJson = json.results;

        // Varre os resultados do JSON. 
        for (let i = 0; i < arrayJson.length; i++) {

            let imagem = arrayJson[i].url.split("").filter(element => Number.isInteger(Number.parseInt(element))).join("");

            let conteudoImagem = conteudo;
            if (conteudoImagem == "people")
                conteudoImagem = "characters";

            let urlImagem = `https://starwars-visualguide.com/assets/img/${conteudoImagem}/${imagem}.jpg`;

            fetch(urlImagem)
            .then(resp => verificarURL(resp))

            const verificarURL = resp => {

                if(resp.status != 200) {
                    urlImagem = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    card(conteudo, arrayJson[i], urlImagem, "padrao");
                }else
                    card(conteudo, arrayJson[i], urlImagem, "padrao");

            }


        }

        // se houver uma próxima pagina, ela será chamada e consumida pela função transformJson
        if(json.next != null){
            buscarInfoAPI(pagina + 1, conteudo);
        }            

    }
}

// Recebe os valores digitados nos inputs do site e busca conteúdos correspondentes na API.
const buscarConteudoPesquisado = (conteudoPesquisado, conteudo) => {

    let url = `https://swapi.co/api/${conteudo}/?search=`;

    fetch(url + conteudoPesquisado)
    .then( resultado => resultado.json() )
    .then( json => fetchConteudo(json) );

    const fetchConteudo = json => {

        console.log(json);

        const criarCards = (acumuladora, elemento) => {

            let $cont = document.getElementById("cont_conteudo_" + conteudo);
            $cont.innerHTML = "";

            let imagem = elemento.url.split("").filter(element => Number.isInteger(Number.parseInt(element))).join("");

            let conteudoImagem = conteudo;
            if (conteudoImagem == "people")
                conteudoImagem = "characters";

            let urlImagem = `https://starwars-visualguide.com/assets/img/${conteudoImagem}/${imagem}.jpg`;

            fetch(urlImagem)
            .then(resp => verificarURL(resp))

            const verificarURL = resp => {

                if(resp.status != 200) {
                    urlImagem = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    card(conteudo, elemento, urlImagem, "padrao");
                }else
                    card(conteudo, elemento, urlImagem, "padrao");

            }

        }

        json.results.reduce(criarCards, "");

    }

}

// Torna visível a DIV de descrição do card recebido pelo parâmetro.
const mostrarDescricao = card => {

    // Pegando o card de descricao do card recebido por parâmetro.
    let descricao = card.getElementsByClassName('card_descricao')[0];
    let statusDescricao = descricao.style.display;

    statusDescricao == "" ? statusDescricao = "none" : statusDescricao = descricao.style.display;

    if (statusDescricao == "none") {    // Se a descrição estiver oculto, será exibido.
        descricao.style.marginTop = "-300px"
        descricao.style.display = "block";
        
    } else {    // Se a descrição estiver sendo exibida, ela será oculta.
        descricao.style.marginTop = "0px"
        descricao.style.display = "none";
    }

}

// Função para adicionar o evento de clique aos cards de conteúdo do site.
// Recebe uma array com os cards que devem receber evento de clique.
const setCardEvent = arrayCards => {

    let tamanhoArray = arrayCards.length;
    // Adicionando evento de clique a todos os cards. O evento chamará a função que exibe a descrição do card.
    for (let i = 0; i < tamanhoArray; i++) {  
        arrayCards[i].addEventListener("click", () => mostrarDescricao(arrayCards[i]));
    }

}

// Recebe uma lista com os itens do menu. Dá a todos eles o evento de clique.
const addClickMenu = itensMenu => {

    let tamanhoarray = itensMenu.length;
    const $conteudos = document.getElementById("cont_conteudo").children;

    for (let i = 0; i < tamanhoarray; i++) {
        // Quando um item de menu for clicado, será chamada uma função que exibe o conteúdo
        // Relacionado ao item e oculta todos os outros conteúdos.
        itensMenu[i].addEventListener("click", () => mostrarConteudo($conteudos, i));

    }

}

// Pegando os itens do menu e enviando para uma função que dá a eles um evento de clique.
const $itensMenu = document.querySelectorAll('.menu_itens');
addClickMenu($itensMenu);

// Chamando a função que insere o conteúdo no site. Passando todos os conteúdos a serem exibidos.
buscarInfoAPI(1, "films");
buscarInfoAPI(1, "people");
buscarInfoAPI(1, "planets");
buscarInfoAPI(1, "species");
buscarInfoAPI(1, "starships");
buscarInfoAPI(1, "vehicles");