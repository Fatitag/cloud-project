import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const GererArticle = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [designation, setDesignation] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { id, designation, prix };
    dispatch({ type: 'ADD_ARTICLE', payload: newArticle });
    setId('');
    setDesignation('');
    setPrix('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ARTICLE', payload: id });
  };

  const articles = useSelector((state) => state.article.articles);

  return (
    <div>
      <h2>Ajout d'un article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div>
          <label>Prix:</label>
          <input
            type="text"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des articles:</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              ID: {article.id}, Designation: {article.designation}, Prix: {article.prix}
              <button onClick={() => handleDelete(article.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun article ajouté.</p>
      )}
    </div>
  );
};

export default GererArticle;
