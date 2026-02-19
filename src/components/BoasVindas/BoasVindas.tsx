import React from 'react';
import './BoasVindas.css'; // Importando CSS para estilos

const BoasVindas: React.FC = () => {
  return (
    <section className="boas-vindas">
      <div className="boas-vindas-container">
        <h1 className="boas-vindas-titulo">Bem-vindo ao Meu Site!</h1>
        <p className="boas-vindas-descricao">
          Explore nossos serviços e descubra como podemos ajudar você.
        </p>
        <button className="boas-vindas-botao">Saiba Mais</button>
      </div>
    </section>
  );
};

export default BoasVindas;