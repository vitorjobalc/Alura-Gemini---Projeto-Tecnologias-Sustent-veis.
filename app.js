function pesquisar() {
    // Função responsável por pesquisar dados e exibir os resultados na seção "resultados-pesquisa".


    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for um string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi pesquisado. Digite para buscar sua tecnologia.</p>"
        return
    }

    //Transforma todo conteúdo da pesquisa em letra minúscula. 
    campoPesquisa = campoPesquisa.toLowerCase()

    // String vazia que será preenchida com os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado da pesquisa.
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Condicional: se no dado titulo includes o campoPesquisa - "||" representa "ou" no código.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#"> ${dado.titulo} </a>
                    </h2>
                    <p class="descrição-meta">${dado.descricao}.</p>
                    <a href="${dado.link}">Saiba mais</a>
                </div>
            `;
        }

    }

    // se nada for encontrado retornar a mensagem...
    if (!resultados) {
        resultados = "<p>Nada foi Encontrado.</p>"
    }
    // Atribui o conteúdo gerado à seção HTML.
    section.innerHTML = resultados;
}