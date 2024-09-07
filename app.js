function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa')
  let campoPesquisa = document.getElementById('campo-pesquisa').value

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhum resultado encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados de cada mulher na tecnologia e cria o HTML dos resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
`;
    }
  }

  if (!resultados) {
    resultados = "<p>Nenhum resultado encontrado</p>"
  }
  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados
}
