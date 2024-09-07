function search() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let result = '';
  
    // Itera sobre os dados de cada mulher na tecnologia e cria o HTML dos resultados
    for (let data of dataMulheresTech) {
      result += `
        <div class="item-resultado">
          <h2>${data.titulo}</h2>
          <p class="descricao-meta">${data.descricao}</p>
          <a href="${data.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = result;
  }