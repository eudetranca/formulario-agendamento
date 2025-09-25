document.addEventListener('DOMContentLoaded', () => {
    showStep(1);

    const diasInput = document.getElementById('dias');
    diasInput.addEventListener('click', () => {
        let selected = prompt(
            "Digite os dias disponíveis separados por vírgula.\nExemplo: quinta-feira, 02 de outubro, sábado, 04 de outubro"
        );
        if (selected) diasInput.value = selected;
    });

    document.getElementById('enviarBtn').addEventListener('click', function () {
        const mensagem = gerarMensagemWhatsApp();
        const telefoneWhatsApp = '5531986497971';
        const link = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.location.href = link;
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
    const nome = document.getElementById('nome').value || 'Não informado';
    const idade = document.getElementById('idade').value || 'Não informado';
    const sexo = document.getElementById('sexo').value || 'Não informado';
    const telefone = document.getElementById('telefone').value || 'Não informado';
    const email = document.getElementById('email').value || 'Não fornecido';
    const instagram = document.getElementById('instagram').value || 'Não fornecido';
    const marcarInstagram = document.getElementById('marcarInstagram').value || 'Não informado';
    const confortoPostagem = document.getElementById('confortoPostagem').value || 'Não informado';
    const sensibilidade = document.getElementById('sensibilidade').value || 'Não informado';
    const comprimento = document.getElementById('comprimento').value || 'Não informado';
    const dias = document.getElementById('dias').value || 'Não informado';
    const horario = document.getElementById('horario').value || 'Não informado';
    const tipoTranca = document.getElementById('tipoTranca').value || 'Não informado';
    const material = document.getElementById('material').value || 'Não informado';
    const observacoes = document.getElementById('observacoes').value || 'Nenhuma';

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
Observações: ${observacoes}

⚠️ Para concluir o pré-agendamento, por favor envie uma foto do seu cabelo aqui no WhatsApp.`;
}