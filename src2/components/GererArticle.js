import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getArticle, deleteArticle } from '../action/articleAction';

const Article = ({ articles, getArticle, deleteArticle }) => {
  const [donne, setDonne] = useState({
    numero: '',
    nom: '',
    prix: '',
  });

  const add = () => {
    getArticle(donne);
    setDonne({
      numero: '',
      nom: '',
      prix: '',
    });
  };

  const supp = () => {
    deleteArticle(donne);
    setDonne({
      numero: '',
      nom: '',
      prix: '',
    });
  };

  const change = (e) => setDonne({ ...donne, [e.target.name]: e.target.value });
  return (
    <div className="article-container">
      <h1>Ajout d'un Article</h1>
      <label className="label" htmlFor="numero">
        Numero :
      </label>
      <input
        className="input"
        onChange={change}
        value={donne.numero}
        type="number"
        name="numero"
      />
      <label className="label" htmlFor="nom">
        Nom :
      </label>
      <input
        className="input"
        onChange={change}
        value={donne.nom}
        type="text"
        name="nom"
      />
      <label className="label" htmlFor="prix">
        Prix :
      </label>
      <input
        className="input"
        onChange={change}
        value={donne.prix}
        type="number"
        name="prix"
      />
      <br />
      <button className="button" onClick={add}>
        + add
      </button>
      <button className="button" onClick={supp}>
        - delete
      </button>
      <h1>liste Article</h1>
      <div className="results">
        <ul>
          {articles.map((article) => (
            <li key={article.numero}>
              {article.numero} | {article.nom} | {article.prix}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.myArticle.tabs,
    color: state.myArticle.color, // Assuming 'color' is a property in the state
  };
};

export default connect(mapStateToProps, { getArticle, deleteArticle })(Article);
