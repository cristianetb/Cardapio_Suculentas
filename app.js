
const produtos = [
  { id: 1, nome: "Echeveria", preco: 15, desc: "Suculenta delicada.", img: "assets/suculenta1.jpg" },
  { id: 2, nome: "Haworthia", preco: 20, desc: "Folhas rajadas únicas.", img: "assets/suculenta2.jpg" },
  { id: 3, nome: "Sedum", preco: 18, desc: "Ótima para jardins.", img: "assets/suculenta3.jpg" }
];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Renderizar catálogo
function renderCatalogo() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";
  produtos.forEach(p => {
    lista.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.nome}">
          <div class="card-body">
            <h5 class="card-title">${p.nome}</h5>
            <p class="card-text">${p.desc}</p>
            <p><strong>R$ ${p.preco}</strong></p>
            <button class="btn btn-success" onclick="adicionarCarrinho(${p.id})">Adicionar</button>
          </div>
        </div>
      </div>`;
  });
}

// Adicionar ao carrinho
function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

// Atualizar contador
function atualizarContador() {
  document.getElementById("contadorCarrinho").textContent = carrinho.length;
}

// Cadastro
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  const usuario = { nome, email, telefone };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  document.getElementById("msgCadastro").textContent = "Cadastro realizado com sucesso!";
  this.reset();
});

// Inicializar
renderCatalogo();
atualizarContador();
