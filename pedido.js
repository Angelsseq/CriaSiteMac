document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("pedido-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const produto = document.getElementById("produto").value;
        const quantidade = document.getElementById("quantidade").value;
        const bebida = document.getElementById("bebida").value;
        const tamanhoBatata = document.querySelector('input[name="tamanho_batata"]:checked').value;
        const adicionais = Array.from(document.querySelectorAll('input[name="adicionais"]:checked')).map(el => el.value);
        const observacoes = document.getElementById("observacoes").value;
        const entrega = document.getElementById("entrega").value;
        const horario = document.getElementById("horario").value;
        const data = document.getElementById("data").value;
        const pagamento = document.getElementById("pagamento").value;
        const promocoes = document.querySelector('input[name="promocoes"]:checked').value;

        // Cria um objeto com os dados do pedido
        const pedido = {
            produto: produto,
            quantidade: quantidade,
            bebida: bebida,
            tamanhoBatata: tamanhoBatata,
            adicionais: adicionais,
            observacoes: observacoes,
            entrega: entrega,
            horario: horario,
            data: data,
            pagamento: pagamento,
            promocoes: promocoes
        };

       
});
