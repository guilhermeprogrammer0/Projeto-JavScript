class Cliente {
    constructor(nome, cpf, data) {
        this.nome = nome;
        this.cpf = cpf;
        this.data = data;
    }
}
var lista_clientes = [];
var posicao = '';

function listar(lista) {
    let auxHtml = '';
    lista.forEach((c, i) => {
        auxHtml += '<tr>' +
            '<td>' + c.nome + '</td>' +
            '<td>' + c.cpf + '</td>' +
            '<td>' + c.data + '</td>' +
            '<td>' + '<a href="#" class="btn btn-success btnAlterar" rel="' + i + '">' + 'Alterar' + '</a>' + '</td>' +
            '<td>' + '<a href="#" class="btn btn-danger btnExcluir" rel="' + i + '">' + 'Excluir' + '</a>' + '</td>' +
            '</tr>';
    });
    return auxHtml;
}
$(document).ready(() => {
    $("#cadastrar").click(() => {
        let nome = document.getElementById('nome').value;
        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        let cpf = $('#cpf').val();
        let data = $('#data').val();
        if (nome != '' && cpf != '' && data != '') {
            cliente = new Cliente(nome, cpf, data);
            if (posicao == '') {
                lista_clientes.push(cliente);
            }
            else {
                lista_clientes[posicao] = cliente;
                posicao = '';
            }
            $('#tabela').html(listar(lista_clientes));
            $('input').val('');
        }
        else {
            alert('Informe todos os dados!');
        }


    })
    document.querySelector("#tabela").addEventListener('click', mostrar);

    function mostrar(e) {

        posicao = e.target.rel;
        if (e.target.classList.contains('btnAlterar')) {
            $("#nome").val(lista_clientes[posicao].nome);
            $("#cpf").val(lista_clientes[posicao].cpf);
            $("#data").val(lista_clientes[posicao].data);
        }
        else if (e.target.classList.contains('btnExcluir')) {
            let confirmar = confirm('Tem certeza que deseja excluir?');
            if (confirmar == true) {
                lista_clientes.splice(posicao, 1);
                $('#tabela').html(listar(lista_clientes));
            }
            else {
                alert('Você não excluiu!');
            }
        }

    }
});









