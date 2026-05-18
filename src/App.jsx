import React from "react";
import { createRoot } from "react-dom/client";
import { ShoppingBag, MessageCircle, Star, ShieldCheck, Truck } from "lucide-react";
import "./style.css";

function App() {
const produtos = [

  {
    nome: "Camisa Corinthians Invasão 2026",
    preco: "R$ 129,90",
    descricao: "Modelo torcedor disponível sob encomenda.",
    imagem: "/Imagem do WhatsApp 2026-05-18 em 15.40.41 (1).jpeg",
  },

  {
    nome: "Camisa Brasil Azul 2026",
    preco: "R$ 149,90",
    descricao: "Camisa premium da seleção brasileira.",
    imagem: "/Imagem do WhatsApp 2026-05-18 às 15.40.41.jpeg",
  },
  {
    nome: "Camisa Flamengo Retrô",
    preco: "R$ 300,00",
    descricao: "Modelo retrô especial para colecionadores.",
  },

];
  return (
    <main>
      <header className="header">
        <div>
          <h1>Machado Football</h1>
          <p>Camisas de time • Retrô • Seleções</p>
        </div>
        <a className="btn gold" href="https://instagram.com/machado_football" target="_blank">
          <ShoppingBag size={18} />
        </a>
      </header>

      <section className="hero">
        <div className="heroText">
          <span>Loja online de camisas de futebol</span>
          <h2>Vista sua paixão pelo futebol com estilo.</h2>
          <p>Camisas de clubes, seleções e modelos retrô selecionados para quem vive o futebol dentro e fora de campo.</p>
          <div className="actions">
            <a className="btn whatsapp" href="https://wa.me/55SEUNUMEROAQUI" target="_blank">
              <MessageCircle size={20} /> Comprar pelo WhatsApp
            </a>
            <a className="btn outline" href="#produtos">
              <ShoppingBag size={20} /> Ver modelos
            </a>
          </div>
        </div>

        <div className="cardHero">
          <ShoppingBag size={72} />
          <h3>Camisas Premium</h3>
          <p>Escolha seu time, consulte disponibilidade e faça seu pedido pelo direct ou WhatsApp.</p>
        </div>
      </section>

      <section className="benefits">
        <div><Star /><h3>Qualidade premium</h3><p>Peças escolhidas com atenção ao acabamento, tecido e detalhes.</p></div>
        <div><ShieldCheck /><h3>Compra segura</h3><p>Atendimento direto para tirar dúvidas antes de finalizar o pedido.</p></div>
        <div><Truck /><h3>Entrega combinada</h3><p>Pedido sob encomenda com prazo informado no atendimento.</p></div>
      </section>

      <section id="produtos" className="products">
        <span>Nossos modelos</span>
        <h2>Categorias de camisas</h2>
        <div className="grid">
          {produtos.map((produto) => (
            <div className="product" key={produto.nome}>
          <div className="productImage">
  {produto.imagem ? (
    <img src={produto.imagem} alt={produto.nome} />
  ) : (
    <ShoppingBag size={54} />
  )}
</div>
              <h3>{produto.nome}</h3>
              <strong>{produto.preco}</strong>
              <p>{produto.descricao}</p>
              <a className="btn gold full" href="https://wa.me/55SEUNUMEROAQUI" target="_blank">Consultar disponibilidade</a>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Quer uma camisa específica?</h2>
        <p>Chame no direct ou WhatsApp, informe o time, temporada e tamanho desejado.</p>
        <a className="btn whatsapp" href="https://wa.me/55SEUNUMEROAQUI" target="_blank">
          <MessageCircle size={22} /> Falar agora
        </a>
      </section>

      <footer>
        <p>© 2026 Machado Football. Todos os direitos reservados.</p>
        <p>Instagram: @machado_football</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
