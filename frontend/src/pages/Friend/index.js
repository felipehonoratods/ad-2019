import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

export default function Friend() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api.get('/friends')
      .then(response => {
        setFriends(response.data)
      })
  }, []);

  async function handleDeleteFriend(_id) {
    try {
      await api.delete(`/friends/${_id}`);
    } catch (err) {
      alert('Erro ao deletar amigo! Tente novamente');
    }

    setFriends(friends.filter(friend => friend._id !== _id));
  }

  function handleDrawFriend() {
    alert('Sorteio realizado!');
  }

  return (
    <div className="friend-container">
      <header>
        <h1>Amigo Secreto</h1>
        <span>Bem vindo</span>

        <Link className="button" to="/friends/new">Cadastrar Amigo</Link>
        <button onClick={() => handleDrawFriend()} type="button">
          Realizar sorteio
        </button>
      </header>

      <h1>Amigos cadastrados</h1>

      <ul>
        {friends.map(friend => (
          <li key={friend._id}>
            <strong>Nome:</strong>
            <p>{friend.name}</p>

            <strong>Email:</strong>
            <p>{friend.email}</p>

            <button onClick={() => handleDeleteFriend(friend._id)} type="button" id="delete-button">
            <FiTrash2 size={20} color="#a8a8b3" />
            </button>
            <Link to={"/friends/edit/"+friend._id} type="button" id="edit-button">
            <FiEdit size={20} color="#a8a8b3" />
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};