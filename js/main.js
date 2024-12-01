document.querySelectorAll('nav ul a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let medicamentos = []
function medicamento(){
    let medicamento = prompt("Digite o medicamento que deseja adicionar a lista de compra: ");
    if (medicamento == ""){
        alert("O campo de Nome do Medicamento é obrigatorio, tente novamente");
    } else{
        medicamentos.push(medicamento)
        alert(`O medicamento "${medicamento}" foi adicionado a lista de compra!`);
    }
}
function agendamento(){
    let area = prompt("Olá, digite a area que deseja agendar a sua visita:");
    if (area == ''){
        alert("A área de atendimento é obrigatória. Por favor, digite a área desejada, como 'Oncologia', por exemplo...");
        return;
    }
    let medico = prompt("Você tem algum médico(a) especifico que deseja que te atenda? Caso não tenha, deixe o espaço em branco");
    if (medico == ''){
        alert(`A sua visita na area de ${area} foi marcada com sucesso!`);
    } else{
        alert(`A sua visita na area de ${area}, com o médico(a): "${medico}" foi marcada com sucesso!`);
    }
}
function estoque(){
    if(medicamentos == ''){
        mercadoria.innerHTML = ''
    }
    else{let mercadoria = document.getElementById("estoque");
    mercadoria.innerHTML = (`Produtos em falta ou próximo a acabar o estoque: "${medicamentos}"`);}
}
// Ideias de JS, adicionar um "Cadastro de Agendamento", ou notificação de estoque ou vencimento, usando caixas de texto no html para a parte de agendamento e botao com alert para as notificações{}{
