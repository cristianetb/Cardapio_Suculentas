// // Produtos fictícios
// const produtos = [
//   {id:1, nome:"Echeveria Azul", preco:15, desc:"Folhas azuladas em roseta.", img:"https://via.placeholder.com/300"},
//   {id:2, nome:"Haworthia Zebra", preco:20, desc:"Listras brancas em folhas verdes.", img:"https://via.placeholder.com/300"},
//   {id:3, nome:"Sedum Dourado", preco:18, desc:"Crescimento rasteiro com folhas amarelas.", img:"https://via.placeholder.com/300"},
//   {id:4, nome:"Crassula Jade", preco:30, desc:"Símbolo de prosperidade.", img:"https://via.placeholder.com/300"},
//   {id:5, nome:"Aloe Vera", preco:25, desc:"Planta medicinal clássica.", img:"https://via.placeholder.com/300"},
//   {id:6, nome:"Kalanchoe Florido", preco:22, desc:"Flores coloridas e vibrantes.", img:"https://via.placeholder.com/300"},
// ];

// let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// // Renderizar produtos na página catálogo
// if(document.getElementById("produtos")){
//   const divProdutos = document.getElementById("produtos");
//   produtos.forEach(p => {
//     divProdutos.innerHTML += `
//       <div class="col-md-4 mb-4">
//         <div class="card h-100">
//           <img src="${p.img}" class="card-img-top" alt="${p.nome}">
//           <div class="card-body">
//             <h5 class="card-title">${p.nome}</h5>
//             <p class="card-text">${p.desc}</p>
//             <p class="fw-bold">R$ ${p.preco},00</p>
//             <button class="btn btn-primary" onclick="adicionarAoCarrinho(${p.id})">Adicionar ao carrinho</button>
//           </div>
//         </div>
//       </div>
//     `;
//   });
//   atualizarCarrinho();
// }

// // Adicionar item
// function adicionarAoCarrinho(id){
//   const item = produtos.find(p => p.id===id);
//   carrinho.push(item);
//   localStorage.setItem("carrinho", JSON.stringify(carrinho));
//   atualizarCarrinho();
// }

// // Atualizar carrinho
// function atualizarCarrinho(){
//   const count = document.getElementById("cart-count");
//   if(count) count.textContent = carrinho.length;

//   const lista = document.getElementById("cart-items");
//   if(lista){
//     lista.innerHTML = "";
//     let total = 0;
//     carrinho.forEach((item, i) => {
//       lista.innerHTML += `<li class="list-group-item d-flex justify-content-between">
//         ${item.nome} - R$ ${item.preco},00
//         <button class="btn btn-sm btn-danger" onclick="removerItem(${i})">Remover</button>
//       </li>`;
//       total += item.preco;
//     });
//     document.getElementById("cart-total").textContent = total.toFixed(2).replace(".",",");
//   }
// }

// // Remover item
// function removerItem(i){
//   carrinho.splice(i,1);
//   localStorage.setItem("carrinho", JSON.stringify(carrinho));
//   atualizarCarrinho();
// }

// // Abrir modal carrinho
// function abrirCarrinho(){
//   const modal = new bootstrap.Modal(document.getElementById("modalCarrinho"));
//   modal.show();
// }

// // Cadastro
// if(document.getElementById("cadastroForm")){
//   document.getElementById("cadastroForm").addEventListener("submit", e=>{
//     e.preventDefault();
//     const nome = document.getElementById


// Produtos de exemplo
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
