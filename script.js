const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};

function buscaCortePorId(id) {
    let buscaCorte = barbearia.cortes;

    for (let i = 0; i < buscaCorte.length; i++) {
        if (buscaCorte[i].id === id) {
            return buscaCorte[i];
        }
    }
    return 'Corte não encontrado.';
}


function buscaBarbaPorId(id) {
    let buscaBarba = barbearia.barbas;

    for (let i = 0; i < buscaBarba.length; i++) {
        if (buscaBarba[i].id === id) {
            return buscaBarba[i];
        }
    }
    return 'Barba não encontrando.'
}

function verificaStatusBarbearia() {
    let verificarStatus = barbearia.estaAberto;

    for (let i = 0; i < verificarStatus; i++) {
        if (verificarStatus === true) {
            return 'Estamos abertos'
        }
    }

    return 'Estamos fechados'
}

function retornaTodosCortes() {
    return barbearia.cortes
}


function retornaTodasBarbas() {
    return barbearia.barbas
}


function criaPedido(nomeCliente, idCorte, idBarba) {

    let funBarba = buscaBarbaPorId(idCorte);
    let funCorte = buscaCortePorId(idBarba);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: idCorte,
        pedidoBarba: idBarba,
        pedidoCortePreco: barbearia.cortes[idCorte].valor,
        pedidoBarbaPreco: barbearia.barbas[idBarba].valor,
    };
    return pedido
}

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            return lista;
        }
    }
}

function calculaTotal(pedido) {
    let pedidoCortePreco = pedido.pedidoCortePreco || 0;
    let pedidoBarbaPreco = pedido.pedidoBarbaPreco || 0;

    const total = pedidoCortePreco + pedidoBarbaPreco;

    return total;
}




