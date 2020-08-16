import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      users_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        {/*  
        https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/ 
        TODO: Personalizar mensagem do WhatsApp
        */}
        <a 
          target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;