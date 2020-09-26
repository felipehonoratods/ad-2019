import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

export default function NewFriend() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleNewFriend(e) {
    e.preventDefault();

    const data = {name, email};

    try {
      const response = await api.post('/friends', data);

      alert(`${response.data.name} Cadastrado com sucesso!`);

      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar!');
    }
  }

  return (
    <div className="new-friend-container">
      <div className="content">
        <section>
          <h1> Cadastrar Novo Amigo </h1>
          <p> Descreva seu Nome Completo e seu E-mail </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleNewFriend}>
          <input 
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          />
          <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  );
};