// função Calcular responsavel por todo o JavaScript dessa pagina,tanto por puxar as informações quanto calcular os valores
function Calcular(){ //Abertura função Calcular
    
    // Array para filtrar as informações obtidas dos inputs
    const campos = [
        document.querySelector('#livro'),
        document.querySelector('#preco'),
        document.querySelector('#cliente'),
    ]

    // Transformando cada valor do Array em uma variavel propria para facilitar o entendimento do codigo 
    let livro = campos[0].value;
    let preco = parseFloat(campos[1].value); //responsavel por transformar a variavel do tipo string para uma do tipo float
    let cliente = campos[2].value;

    let valorDesconto;
    let valorFinal;

    // Código responsavel pela seleção de dados do select para realizar uma conta conforme o cliente escolhido 
    if(cliente === 'Cliente A'){
        valorDesconto = preco * 0.15
    }else if(cliente === 'Cliente B'){
        valorDesconto = preco * 0.10;
    }else if(cliente === 'Cliente C'){
        valorDesconto = preco * 0.07;
    }else{
        valorDesconto = 0;
    }

    // Codigo responsavel por pegar o valorFinal do livro apos o desconto,utilizando do valor do desconto obtido acima pela seleção de dados
    valorFinal = (preco - valorDesconto);


    // Codigo responsavel por transformar as informações obtidas em cada input em informações em HTML visiveis para o usuário 
    document.getElementById('nomeLivro').innerHTML = 'Nome do Livro: ' + '&nbsp; &nbsp;'+ livro;
    document.getElementById('precoLivro').innerHTML = 'Preço do Livro: '+'&nbsp;'+'R$'+'&nbsp;'+ preco.toFixed(2); //casas decimais
    document.getElementById('tipoDesconto').innerHTML = 'Desconto '+'&nbsp;'+ cliente +":";
    document.getElementById('valorDesconto').innerHTML = 'R$' +'&nbsp;' + valorDesconto.toFixed(2);
    document.getElementById('totalLivro').innerHTML ='Total a Pagar: '+'&nbsp;' +'R$'+'&nbsp;' + valorFinal.toFixed(2);
  

    //Adiciona um evento quando acontece o click no botão do formulário
    document.querySelector('form').addEventListener('submit',function(evento){
        // serve para não criar uma aba nova quando clicar no botão,se mantém na própria página onde é realizada a ação
        evento.preventDefault();
    });

} //Fechamento função Calcular


