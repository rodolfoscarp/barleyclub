$(() => {

    var carrinhoBarley = sessionStorage.getItem('carrinhoBarley');

    if (carrinhoBarley) {
        $("#carrinhoIcon").attr("src", "img/shop-icon-full.png");
    }

    //*****************************************************
    //Carregar produtos no carrinho
    //*****************************************************
    if (carrinhoBarley == null || carrinhoBarley == undefined) {
        $("#itensCarrinho").append("<p>Seu Carrinho está vazio</p>");
    }
    else {
        let itens = JSON.parse(carrinhoBarley)
        itens.produtos.forEach((e, index) => {
            let item =
                `<div class="row m-3">
                <div class="col-4">
                    <div class="col-6">
                        <img src="${e.produto.url_img}" class="img-fluid m-3" alt="">
                    </div>
                    <div class="col-6">
                        <h5>${e.produto.nome}</H5>
                    </div>
                </div>
                <div class="col-2 my-auto px-2">
                    <div class="form-group">
                    <input type="number"
                       class="form-control form-control-sm" id="qunt" value="${e.quantidade}" 
                        onChange="atualizarValor(${index},${this.value})">            
                    </div>               
                </div>
                <div class="col-2 my-auto">
                    <p>R$ ${e.produto.preco.toFixed(2)}</p>
                </div>
                <div class="col-2 my-auto">
                    <p>R$ ${(e.produto.preco * e.quantidade).toFixed(2)}</p>
                </div>
                <div class="col-2 my-auto">
                    <p>
                    <img src="img/delete.png" onclick="removerItem(${index})"></p>
                </div>
            </div>`;
            $("#itensCarrinho").append(item);
        })
        $("#itensCarrinho").append(
            `<div class="row m-5">
                <a href="#" class="btn btn-primary" 
                    role="button" data-toggle="modal" 
                    data-target="#modalDados">Finalizar Compra</a>
            </div> `
        )
    }
})

function removerItem(index) {
    var carrinhoBarley = sessionStorage.getItem('carrinhoBarley');
    carrinhoBarley = JSON.parse(carrinhoBarley);
    carrinhoBarley.produtos.splice(index, 1);
    sessionStorage.setItem('carrinhoBarley', JSON.stringify(carrinhoBarley));
    window.location.reload()
}

function atualizarValor(index) {
    let quant = event.target.value;
    var carrinhoBarley = sessionStorage.getItem('carrinhoBarley');
    carrinhoBarley = JSON.parse(carrinhoBarley);
    carrinhoBarley.produtos[index].quantidade = quant;
    sessionStorage.setItem('carrinhoBarley', JSON.stringify(carrinhoBarley));
    window.location.reload()
}

function enviarPedido(){
    var modal = $("#modalDados");
    var pedido = {
        cliente: {
            nome: $('#modalNome').val(),
            endereco: {
                rua: $('#modalEndereco').val(),
                bairro: $('#modalBairro').val(),
                cidade: $('#modalCidade').val(),
                estado: $('#modalEstado').val(),
                complemento: $('#modalComplemento').val(),
                cep: $('#modalCep').val(),
            },
            email: $('#modalEmail').val()
        },
        status: "Confirmado",
        items: []
    }
    var carrinhoBarley = sessionStorage.getItem('carrinhoBarley');

    if (carrinhoBarley == null || carrinhoBarley == undefined) {
        $("#itensCarrinho").append("<p>Seu Carrinho está vazio</p>");
    }
    else {
        let itens = JSON.parse(carrinhoBarley)
        itens.produtos.forEach((e) => {
            pedido.items.push(e);
        })
        
        axios.post('http://localhost:8160/api/pedidos',pedido)
        .then((res)=>{
            alert("Pedido realizado com sucesso!");
        })
        console.log(pedido);
    }
}