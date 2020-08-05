import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/21347783?s=460&u=ffe9da3ab2586c94be5890bd3ff7c4817675cf2a&v=4" alt="Molinux" />
        <div>
          <strong>Marcus Molinero</strong>
          <span>Linux</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias opensource.
            <br />
            Apaixonado por otimizar o fluxo das empresas através de tecnologias livres.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 60</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;