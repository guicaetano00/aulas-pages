import React from 'react';
import './Rodape.css'; // Importando CSS para estilos

const Rodape: React.FC = () => {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <p className="rodape-texto">&copy; 2026 Meu Site. Todos os direitos reservados.</p>
        <ul className="rodape-links">
          <li><a href="#privacidade" className="rodape-link">Política de Privacidade</a></li>
          <li><a href="#termos" className="rodape-link">Termos de Uso</a></li>
          <li><a href="#contato" className="rodape-link">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Rodape;