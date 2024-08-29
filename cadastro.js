const form = document.getElementById('cadastro-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem').value;

  fetch('/cadastro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, telefone, senha, mensagem })
  })
  .then(response => response.text())
  .then((message) => {
    console.log(message);
    alert('Dados enviados com sucesso!');
  })
  .catch((error) => {
    console.error(error);
    alert('Erro ao enviar dados!');
  });
});