import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

export default function EditFriend(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const currentUserId = props.match.params.id;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api.get(`/friends${currentUserId}`)
      .then(response => {
        setFriends(response.data)
      })
  }, [currentUserId]);

  const history = useHistory();

  
  async function handleEditFriend(e) {
    e.preventDefault();


    const data = {name, email};

    try {
      api.put(`/friends/${currentUserId}`, data);

      alert(currentUserId);

      history.push('/');
    } catch (err) {
      alert('Erro ao alterar!');
    }

  }

  return (
    <div className="edit-friend-container">
      <div className="content">
        <section>
          <h1> Alterar Amigo </h1>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        {friends.map(friend => (
          <form onSubmit={handleEditFriend}>
            <input 
            placeholder="Nome"
            value={friend.name}
            onChange={e => setName(e.target.value)}
            />
            <input
            type="email"
            placeholder="Email" 
            value={friend.email}
            onChange={e => setEmail(e.target.value)}
            />
            <button className="button" type="submit"> Alterar </button>
          </form>
        ))}
      </div>
    </div>
  );
};