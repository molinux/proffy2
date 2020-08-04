import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  // Se colocar um ? na prop, ele não é obrigatorio
  // Ex.: title?: string;
  title: string;
}

// FC = Function Component = Um componente escrito em formato de função
const PageHeader: React.FC <PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
      <strong>{props.title}</strong>
      </div>
    </header>
  )
}

export default PageHeader;