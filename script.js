document.addEventListener('DOMContentLoaded', () => {
    showStep(1); // Exibir a primeira etapa

    document.getElementById('pedidoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const mensagem = gerarMensagemWhatsApp();
        const telefoneWhatsApp = '5531973055213';

        // Gerar o link do WhatsApp usando crase para interpolação
        const link = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        // Imprimir o link no console para verificar
        console.log("Link gerado:", link);

        // Abrir o link em uma nova janela
        window.open(link, '_blank');
    });
});

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((element) => {
        element.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');
}

function nextStep(step) {
    showStep(step);
}

function prevStep(step) {
    showStep(step);
}

function gerarMensagemWhatsApp() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value || 'Não fornecido';
    const instagram = document.getElementById('instagram').value || 'Não fornecido';
    const marcarInstagram = document.getElementById('marcarInstagram').value;
    const confortoPostagem = document.getElementById('confortoPostagem').value;
    const sensibilidade = document.getElementById('sensibilidade').value;
    const comprimento = document.getElementById('comprimento').value;
    const dias = document.getElementById('dias').value;
    const horario = document.getElementById('horario').value;
    const tipoTranca = document.getElementById('tipoTranca').value;
    const material = document.getElementById('material').value;
    const observacoes = document.getElementById('observacoes').value || 'Nenhuma';

    // Montar a mensagem para o WhatsApp
    return `Olá, gostaria de realizar um pré-agendamento. Aqui estão meus dados:
    
    Nome: ${nome}
    Idade: ${idade}
    Sexo: ${sexo}
    Telefone: ${telefone}
    E-mail: ${email}
    Instagram: ${instagram}
    Podemos marcar no Instagram: ${marcarInstagram}
    Confortável em postar fotos: ${confortoPostagem}
    Couro cabeludo sensível: ${sensibilidade}
    Comprimento do cabelo: ${comprimento} cm
    Dias disponíveis: ${dias}
    Horário: ${horario}
    Tipo de trança: ${tipoTranca}
    Material: ${material}
    Observações: ${observacoes}`;
}