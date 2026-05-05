document.getElementById('formCronograma').addEventListener('submit', function(event) {
    // Impede o site de recarregar ao clicar no botão
    event.preventDefault();

    // Capturando os valores dos campos
    const cultura = document.getElementById('cultura').value;
    const dataInput = document.getElementById('data').value;
    const produto = document.getElementById('produto').value;

    // Validação básica para não aceitar campos vazios
    if (dataInput === "" || produto === "") {
        alert("Por favor, preencha todos os campos para garantir o manejo correto!");
        return;
    }

    // Formatando a data para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = dataInput.split('-').reverse().join('/');

    // Definindo uma carência fictícia baseada no produto (Exemplo técnico para o Agrinho)
    // Em um sistema real, isso viria de um banco de dados de defensivos
    const carenciaDias = Math.floor(Math.random() * 20) + 1; 

    // Selecionando o corpo da tabela
    const tabela = document.getElementById('tabelaCorpo');

    // Criando uma nova linha (tr)
    const novaLinha = document.createElement('tr');

    // Montando o conteúdo da linha
    novaLinha.innerHTML = `
        <td>${dataFormatada}</td>
        <td>${cultura}</td>
        <td>${produto}</td>
        <td>${carenciaDias} dias</td>
        <td><span class="badge bg-warning text-dark">Pendente</span></td>
    `;

    // Adicionando a linha com um efeito suave
    novaLinha.style.opacity = "0";
    tabela.prepend(novaLinha); // Adiciona no topo da lista
    
    // Pequena animação de surgimento
    setTimeout(() => {
        novaLinha.style.transition = "opacity 0.5s ease";
        novaLinha.style.opacity = "1";
    }, 10);

    // Limpando o formulário para a próxima entrada
    document.getElementById('formCronograma').reset();
    
    console.log("Manejo agendado com foco em sustentabilidade!");
});