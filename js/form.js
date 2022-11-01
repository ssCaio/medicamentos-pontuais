
const botaoAdicionar = document.querySelector("#adicionar-medicamento");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");
    const medicamento = obtemMedicamentoDoFormulario(form);
    const medicamentoTr = montaTr(medicamento);
    // const erros = validaPaciente(paciente);
    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);
    //     return;
    // }
    const tabela = document.querySelector("#tabela-medicamento");
    tabela.appendChild(medicamentoTr);
    form.reset();
    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";
});

function obtemMedicamentoDoFormulario(form) {
    const medicamento = {
        nome: form.nome.value,
        solicitacao: form.solicitacao.value,
        saida: form.saida.value,
        quantidade: form.quantidade.value,
        validade: form.validade.value,
    }
    return medicamento;
}

function montaTr(medicamento) {
    const medicamentoTr = document.createElement("tr");
    medicamentoTr.classList.add("medicamento");

    medicamentoTr.appendChild(montaTd(medicamento.nome, "info-nome"));
    medicamentoTr.appendChild(montaTd(medicamento.solicitacao, "info-solicitacao"));
    medicamentoTr.appendChild(montaTd(medicamento.saida, "info-saida"));
    medicamentoTr.appendChild(montaTd(medicamento.quantidade, "info-quantidade"));
    medicamentoTr.appendChild(montaTd(medicamento.validade, "info-validade"));

    return medicamentoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

// function validaPaciente(paciente) {

//     var erros = [];

//     if (medicamento.nome.length == 0) {
//         erros.push("O nome não pode ser em branco");
//     }

//     if (medicamento.gordura.length == 0) {
//         erros.push("A gordura não pode ser em branco");
//     }

//     if (medicamento.peso.length == 0) {
//         erros.push("O peso não pode ser em branco");
//     }

//     if (medicamento.altura.length == 0) {
//         erros.push("A altura não pode ser em branco");
//     }

//     if (!validaPeso(medicamento.peso)) {
//         erros.push("Peso é inválido");
//     }

//     if (!validaAltura(medicamento.altura)) {
//         erros.push("Altura é inválida");
//     }

//     return erros;
// }

// function exibeMensagensDeErro(erros) {
//     var ul = document.querySelector("#mensagens-erro");
//     ul.innerHTML = "";

//     erros.forEach(function(erro) {
//         var li = document.createElement("li");
//         li.textContent = erro;
//         ul.appendChild(li);
//     });
// }
