function verificarNome() {
  var nome = document.getElementById("nomeInput").value
  if (nome.toLowerCase() === "vitória") {
    // Redirecionar para outra página
    window.location.href = "page1.html"
  }
  if (nome.toLowerCase() === "vitoria") {
    // Redirecionar para outra página
    window.location.href = "page1.html"
  } else {
    // Exibir mensagem de acesso negado
    var mensagem = document.createElement("p")
    mensagem.textContent = "Acesso negado. Você não é o amor da minha vida!!"
    document.body.appendChild(mensagem)
  }
}
