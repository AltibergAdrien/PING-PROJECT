const botao = document.querySelector("#btn");
const input = document.querySelector("#input");
const DivErro = document.querySelector("#div-erro");

botao.addEventListener("click", function acao(event) {
  event.preventDefault();

  // Ação que será executada quando o botão for clicado
  var valorDoInput = input.value;

  // Verifica se o valor é uma string vazia
  if (valorDoInput === "") {

    //cria um elemento
    var msg = document.createElement("p");

    // adiciona um texto na div
    msg.textContent = "Please provide a valid email address";

    //adiciona uma classe no css da div
    msg.classList.add("msg-erro");

    // Adicione a nova div ao corpo do documento
    DivErro.appendChild(msg);

    //adiciona uma classe no css da tag
    input.classList.add("input");

    //Faz com que a ação seja executada apenas uma vez
    botao.removeEventListener("click", acao);

  } else {
    alert("você será notificado!");
    // Defina o tempo em milissegundos antes de recarregar (por exemplo, 5000ms para 5 segundos)
    var tempoAntesDeRecarregar = 300;

    // Agende o recarregamento após o tempo especificado
    setTimeout(function () {
      location.reload();
    }, tempoAntesDeRecarregar);
  };


});