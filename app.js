function search() {
  let section = document.getElementById('resultados-pesquisa')

  let result = ''

  // Loop de Repetição
  for (let data of dataMulheresTech) {
    result += `
            <div class="item-resultado">
                <h2>${data.titulo}</h2>
                <p class="descricao-meta">${data.descricao}</p>
                <a href="${data.link}" target="_blank">Mais informações</a>
            </div>
        `
  }

  section.innerHTML = result
}
