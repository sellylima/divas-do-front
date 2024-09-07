function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa
  let section = document.getElementById('resultados-pesquisa');
  let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    return; // Interrompe a função se o campo estiver vazio
  }

  // Inicializa variáveis para armazenar os resultados e os dados de cada elemento
  let resultados = "";
  let titulo, descricao, tags;

  // Itera sobre os dados, compara com a pesquisa e cria o HTML dos resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se a pesquisa existe no título, descrição ou tags
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado que coincida com a pesquisa
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Rede Social</a>
        </div>
      `;
    }
  }

  // Verifica se foram encontrados resultados e atualiza a seção
  section.innerHTML = resultados || "<p>Nenhum resultado encontrado</p>";
}
